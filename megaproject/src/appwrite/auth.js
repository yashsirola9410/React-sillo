/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */


// This code is user authentication service using appwrite , a backend platform that provides authentication , database and more .

// It defines a class AuthService that handles:
// User registration (createAccount)
// User login (login)
// Fetching the current logged-in user (getCurrentUser)
// Logging out (logout

// At the end, it exports an instance of AuthService so it can be used elsewhere in the app.
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
// // Client: Connects to the Appwrite backend.
// Account: Manages user authentication login, registration etc
// ID: Generates unique user IDs automatically.

export class AuthService{
    client = new Client();   // client is used to connect with appwrite backend 
    account;

    constructor(){
        this.client
               .setEndpoint(conf.appwriteUrl)
               .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email , password , name}){
         
        try{
           const userAccount = await this.account.create(ID.unique() , email , password, name); //creates a new account in appwrite
           if(userAccount){
            //call another method
            return this.logic({email, password});
           }else{
            return userAccount;
           }
        }catch(error){
            throw error;
        }
    }

    async login({email , password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
           throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
           throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
    
}

const authService = new AuthService();

export default authService

// Method	Purpose
// createAccount()	Creates a new user in Appwrite
// login()	Logs in the user and creates a session
// getCurrentUser()	Retrieves the currently logged-in user
// logout()	Logs the user out by deleting sessions