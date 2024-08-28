import { Account, ID, Client} from 'react-native-appwrite';
import SignIn from './../app/(auth)/sign-in';
export const config={
    endpoint: 'https://clound.appwrite.io/v1',
    platform: 'com.jsm-aora',
    projectId: '66ce4bb0000427f556f3',
    databaseId: '66ce4f690005857678ac',
    userCollectionId:'66ce7d1f0031db2cde60',
    videoCollectionId:'66ce5044003131119c66',
    storageId:'66ce545f001e7d636862'
}

const client  = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async( email,password,
username) =>{
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar:  avatarUrl
            }
        )
        return newUser;
    }catch(error){
        console.log(error);
        throw new Error(error);

    }
}

export const signIn = async(email,password)=>{
    try{
        const session = await account.craeteEmailSession(email, password)
        return session;
    }catch (error){
        throw new Error(error);
    }
}


export async function getCurrentUser(email, password){
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [query.equal('accoundId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;

        return currentUser.documents[0];
    }catch (error) {
        console.log(error);
    }
}

