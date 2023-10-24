import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  public publications = [
    {
      name: "Друзья",
      products: [
        {
          name: "У СЕНИ НОВАЯ ШАПКА",
          description: "ОФИГЕТЬ КАКАЯ",
          raiting: "Raiting: 5",
          realPage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          currectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          likes: 1,
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "У СЕНИ НОВАЯ ШАПКА",
          description: "ОФИГЕТЬ КАКАЯ",
          raiting: "Raiting: 5",
          realPage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          currectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          likes: 1,
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },{
          name: "У СЕНИ НОВАЯ ШАПКА",
          description: "ОФИГЕТЬ КАКАЯ",
          raiting: "Raiting: 5",
          realPage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          currectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzYxWVfa_HbzSUWRIG-CuUGS6HZiI1Ex6uOnj-Us&s",
          likes: 1,
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
      ]
    },

  ]

  constructor() {
  }
}
