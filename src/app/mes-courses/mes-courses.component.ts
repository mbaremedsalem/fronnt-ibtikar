import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { environment } from 'src/envirements/environement';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mes-courses',
  templateUrl: './mes-courses.component.html',
  styleUrls: ['./mes-courses.component.css']
})
export class MesCoursesComponent {
  mescoursesList: any[] = [];


  dataSource = new MatTableDataSource<any>();
  searchTerm: string = '';
  balanceList: any [] = [
    {
      isSelected:false
    }
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private mescourseService: CoursesService,@Inject(LOCALE_ID) private locale: string,public dialog: MatDialog, private router: Router,private http: HttpClient) { }


  ngOnInit(): void {
    this.mescourseService.getCoursesbyenseignant().subscribe((data:any[])=>{
      this.mescoursesList = data;
      this.dataSource.data = this.mescoursesList;
    });
  
  }

  // -------
  // openUpdateDialog(noteId: number) {
  //   const dialogRef = this.dialog.open(UpdateDialogComponent, {
  //     data: { noteId: noteId },
  //     width: '1200px',
  //     panelClass: 'custom-dialog-container',
  //     position: {
  //       left: '227px', // Ajoutez la valeur de padding-left que vous souhaitez
  //     },
  //     disableClose: true
  //   });
  
  //   dialogRef.afterClosed().subscribe((formData: FormData) => {
  //     if (formData) {
  //       this.updateDocument(noteId, formData);
  //     }
  //   });
  // }
  updateDocument(id: number, formData: FormData): void {
    const headers = new HttpHeaders({
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    });
  
    this.http.put(`${environment.baseUrl}update-document/${id}`, formData, { headers }).subscribe(
      (response: any) => {
        // Gérer la réponse de l'API ici
        console.log('Update success:', response);
        window.location.reload();
      },
      (error: any) => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la mise à jour du document :', error);
      }
    );
  }
  applyFilter() {
    // Apply the filter directly to the MatTableDataSource
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }
 
  toggleSelection(courses: any) {
    courses.isSelected = !courses.isSelected;
  }
}
