Q.1 > What  is NPM  ?

A.1 > npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.


NOTE: NPM Doesn't stand for " Node Package Manager".

Q.2  > What are Bundler ?

A.2 > 

Q.3 > What are dipendencies ?

A.3 > dependencies means my project denpends on some pacakage.

Q.4 > Why do we need packages?

A.4 > We need alot of functiaonality in our project that's why we need packages. React app can't be a full fleget production ready app it need some kind of packages to impower the app. we need to minify it , we need to bundle it , we need to chunking , tree shaking and alot of things. to do it so we need packages and to to install those packages we use npm 


i.e : parcel, vite, web-pack 
to install  parcell use npm install -D parcel 

here -D means "Dev dependencies"



Q.5 > What is the difference between tilde(~) and caret(^) ? which we saw in package.json .

A.5 > we use (caret ^) if we want our app version to be auto upgrade (min and mid version )

else if we use  (tilde ~ ) to update it by our self
else if we don't specify any of these symbol that means we want to be stick in the same version.


Q.6 > What is package-lock ?

A.6 > we don't want uncertainity in our app which is on local system and on production , so that's why here we have package-lock.json to locks the  version. package-lock.json have the actual version of our app. basically it keeps the snapshot of the version after every updation or when we install it first.

package-lock.json is a very importent file , it locks the version, we never have to put it on gitignore otherwise we have to face issue and say  "it is working on my system but not in production" which is a meme also.

it makes sure that the same version is on  our local system and production it maintains the intigrity because it has a hash .


Q.7 > Why we got Node_modules when we installed parcel?

A.7 > Node_modules is like a data base .
whenever we instsll something it get install in our node_module

