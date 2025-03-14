import conf from '../conf/conf';
import { Client , ID , Databases , Storage , Query } from 'appwrite';  //{ Client, ID, Databases, Storage, Query } are imported 
// from Appwrite to interact with its services:


//This code is a JavaScript service class that interacts with Appwrite, a backend-as-a-service platform. 
// The class provides functions to manage posts and files using Appwrite's database and storage services. 

export class Service{
     client = new Client ;
     databases;
     bucket;

     constructor(){
       this.client 
       .setEndpoint(conf.appwriteUrl)
       .setProject(conf.appwriteProjectId)    ;
       this.databases = new Databases(this.client);
       this.bucket = new Storage(this.client);
    }

    // client: Creates an Appwrite client instance.
    // databases: Will store a database instance.
    // bucket: Will store a storage instance.


    //this is for creating the post 

    // this.databases.createDocument(...) → Adds a new document (post) to the Appwrite database.
    async createPost({title , slug , content , featuredImage , status , userId}){
         try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
         }catch(error){
            console.log("Appwrite serive :: createPost :: error" , error);
         }
    }

    //this is for updating the post 
    async updatePost(slug ,{title , content , featuredImage , status}){
        try{
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
           )
        }catch(error){
            console.log("Appwrite serive :: updatePost :: error" , error);
        }
    }
    
    // for deleting the post 
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error" + error);
            return false ;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false 
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false 
        }
    }

    //file upload services
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite serive :: uoloadFile :: error" , error);
            return false 
        }
    }

    async deleteFIle(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error" , error);
            return false 
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

    const service = new Service()
    export default service 

