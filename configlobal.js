import { config } from "dotenv";

config()

export  const configlobal = {
    'aws':{
        AWS_BUCKET_NAME : process.env.AWS_BUCKET_NAME,
        AWS_BUCKET_REGION : process.env.AWS_BUCKET_REGION,
        AWS_PUBLIC_KEY : process.env.AWS_PUBLIC_KEY,
        AWS_SECRET_KEY : process.env.AWS_SECRET_KEY,        
    }
}