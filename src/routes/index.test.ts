import request from 'supertest';
import { app } from "../app_test";


it('response',async ()=>
{
 await request(app).get("/").expect(200);
});

app.listen(8001, () => {
  console.log(`listening to port 8001`);
});