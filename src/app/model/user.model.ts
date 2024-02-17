export class User {
    id!: number;
    status!:number;
    role!:string;
    nom!: string;
    email!: string;
    prenom!: string;
    adress!: string;
    date_naissance!: string;
    lastname!: string;
    phone!:string;
    image!:string;
    message!:string;
    access!:string;
    refresh_token!:string;
  }
//   'message': 'login success',
//   'status':status.HTTP_200_OK, 
//   'id': user.id,
//   'role':user.role,
//   'email': user.email,
//   'nom': user.name,
//   'prenom':user.prenom,
//   'adress':user.address,
//   'date_naissance':user.date_naissance,
//   'phone': user.phone,
//   'access': str(refresh.access_token),
//   'refresh_token': str(refresh),  