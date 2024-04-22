// // import { NextResponse } from "next/server"

// // export function middleware(req,res,next) {
// //     return NextResponse.redirect(new URL("/",req.url));
// // }

// // export const config={
// //     matcher:"/Components/Log/Form/Registration"
// // }


// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/Components/Log/Form/Registration', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }

// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const p=1
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My HTML Response</title>
      </head>
      <body>
        <h1>Hello, this is my custom HTML ${p} response!</h1>
      </body>
    </html>
  `

  const response = new Response(htmlContent, {
    headers: { 'Content-Type': 'text/html' },
  })

  return response
}
export const config = {
  matcher: '/m',
}