# Express.js Basic MVC
สำหรับการเรียนรู้หลักการพื้นฐานของ MVC โดยใช้ Express.js มาจัดการ
## สิ่งที่ต้องเตรียม

 - [Docker](https://www.docker.com/)
 - [Node js](https://nodejs.org/en)

## การตั่งค่า Docker
เปิด Terminal ขั้นมา จากนั้น ทำการ pull images ของ mysql และ phpmyadmin เพื่อใช้ในการจัดการของ Database
```docker
docker pull mysql
docker pull phpmyadmin/phpmyadmin
```
**ทำการตั่งค่า mysql**
```docker
docker run --name=<Container_Name> -e MYSQL_ROOT_PASSWORD=<Password> -e MYSQL_DATABASE=<Database_Name> -p 3306:3306 -d mysql
```
**วิธีการดู Config**
```docker
docker inspect <Container_Name>
```
**การเข้าถึง shell mysql**
```docker
docker exec -it <Container_ID> bash  
mysql -u root -p
```

> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '<Password>';

**ทำการตั่งค่า phpmyadmin**
```docker
docker run --name=<Container_Name> -d --link <Container_name_of_database>:db -p 8081:80 phpmyadmin/phpmyadmin
```

