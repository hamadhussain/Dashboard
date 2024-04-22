import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div>
        <div className="flex justify-center py-10">
          <Tabs defaultValue="account" className="w-full md:w-[400px]">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 bg-slate-700">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList><br />
            <div className="">
              {" "}
              <TabsContent value="account" className="">
                <Card className="bg-slate-700">
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    {/* <CardDescription>
                    Fill the form to login to your account here. Click submit
                    when you're done.
                  </CardDescription> */}
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter Name"
                        className="bg-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Email</Label>
                      <Input
                        type="email"
                        id="username"
                        placeholder="Enter Email"
                        required="required"
                        className="bg-slate-700"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    {/* Button commented out to prevent submit */}
                    {/* <Button type="submit" className="bg-black text-white hover:bg-green-500 hover:text-white">SUBMIT</Button> */}
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card className="bg-slate-700">
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Enter password</Label>
                      <Input
                        id="current"
                        type="password"
                        placeholder="Enter Password"
                        className="bg-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">Confirm password</Label>
                      <Input
                        id="new"
                        type="password"
                        placeholder="Confirm Password"
                        className="bg-slate-700"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="bg-gray-900 text-white hover:bg-gray-800 hover:text-white"
                    >
                      LOGIN
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <br />
      </div>
    </>
    // <div>
    //   <div className="flex justify-center py-10">
    //     <Tabs defaultValue="account" className="w-[400px] ">
    //       <TabsList className="grid w-full grid-cols-2">
    //         <TabsTrigger value="account">Account</TabsTrigger>
    //         <TabsTrigger value="password">Password</TabsTrigger>
    //       </TabsList>
    //       <TabsContent value="account">
    //         <Card>
    //           <CardHeader>
    //             <CardTitle>Account</CardTitle>
    //             <CardDescription>
    //               Fill form to login to your account here. Click submit when
    //               you're done.
    //             </CardDescription>
    //           </CardHeader>
    //           <CardContent className="space-y-2">
    //             <div className="space-y-1">
    //               <Label htmlFor="name">Name</Label>
    //               <Input id="name" placeholder="Enter Name" />
    //             </div>
    //             <div className="space-y-1">
    //               <Label htmlFor="username">Email</Label>
    //               <br />
    //               <Input
    //                 type="email"
    //                 id="username"
    //                 placeholder="Enter Email"
    //                 required="required"
    //               />
    //               {/* <input className=" p-2.5 border-l-neutral-950 w-max" type="email" name="" id="username"  placeholder="Enter Email"/> */}
    //             </div>
    //           </CardContent>
    //           <CardFooter>
    //             {/* <Button type="submit" className=" bg-black text-white hover:bg-green-500 hover:text-white">SUBMIT</Button> */}
    //           </CardFooter>
    //         </Card>
    //       </TabsContent>
    //       <TabsContent value="password">
    //         <Card>
    //           <CardHeader>
    //             <CardTitle>Password</CardTitle>
    //           </CardHeader>
    //           <CardContent className="space-y-2">
    //             <div className="space-y-1">
    //               <Label htmlFor="current">Current password</Label>
    //               <Input id="current" type="password" />
    //             </div>
    //             <div className="space-y-1">
    //               <Label htmlFor="new">New password</Label>
    //               <Input id="new" type="password" />
    //             </div>
    //           </CardContent>
    //           <CardFooter>
    //             <Button
    //               type="submit"
    //               className=" bg-black text-white hover:bg-green-500 hover:text-white"
    //             >
    //               SUBMIT
    //             </Button>
    //           </CardFooter>
    //         </Card>
    //       </TabsContent>
    //     </Tabs>
    //   </div>
    //   <Link href="/Components/Body/Membership/Form/Registration">
    //     <div className="link underline text-sky-500 flex justify-center">
    //       Go To Rejister Form?
    //     </div>
    //   </Link><br />
    // </div>
  );
};

export default Page;
