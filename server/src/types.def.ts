import {z} from 'zod'

const EnvVariables = z.object({
  PORT: z.string().min(1).max(4),
  MONGO_URI: z.string().min(1),
  SECRET_KEY: z.string().min(10).max(20),
  ORIGIN: z.string().min(1),
});

export type UserModelType = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  mobile: string;
  role: string;
};

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

declare global {
    namespace NodeJS {
        export interface ProcessEnv extends z.infer<typeof EnvVariables> {}
    }
}