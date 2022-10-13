import {S3Client, PutObjectCommand,ListObjectsCommand,GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {configlobal} from './configlobal.js'

const client = new S3Client({
    region:configlobal.aws.AWS_BUCKET_REGION,
    credentials:{
        accessKeyId:configlobal.aws.AWS_PUBLIC_KEY,
        secretAccessKey:configlobal.aws.AWS_SECRET_KEY
    }
})

export async function uploadFile(file){
    const uploadParam = {
        Bucket : configlobal.aws.AWS_BUCKET_NAME,
        Key: file.name,
        Body: file.data
    };
    const command = new PutObjectCommand(uploadParam);
    return await client.send(command);
}

export async function getFiles(){
   const command =  new ListObjectsCommand({
        Bucket:configlobal.aws.AWS_BUCKET_NAME
    })
    return await client.send(command)
}

export async function getFile(filename){
    const command =  new GetObjectCommand({
         Bucket:configlobal.aws.AWS_BUCKET_NAME,
         Key: filename
     })
     return await client.send(command)
 }


 export async function getFileURL(filename){
    const command =  new GetObjectCommand({
         Bucket:configlobal.aws.AWS_BUCKET_NAME,
         Key: filename
     })
     return await getSignedUrl(client,command,{expiresIn:3600});
 }

 