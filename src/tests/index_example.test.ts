import request from 'supertest';
import { app } from "../app";


it('response',async ()=>
{
 await request(app).get("/").expect(200);
});