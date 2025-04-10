// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

// module.exports = function(passport,User){
//    passport.use({usernameField:"email"},async(email,password,done)=>{
//       try{
//          const user = await User.findOne({where:{libraryId}});
//          if(!user){
//             return done(null,false,{message:"User not Found"});
//          }
//          const isMatch = await bcrypt.compare(password,user.password);
//          if(!isMatch){
//             return done(null,false,{message:"Incorrect Password"});
//          }
//          return done(null,user)
//       }catch(error){
//          done(error);
//       }
//    })

// passport.serializeUser((user,done) =>{
//    done(null,user.id);
// });

// passport.deserializeuser(async(id,done)=>{
//    try{
//       const user = await User.findByPk(id);
//       done(null,user);
//    }catch(error){
//       done(error);
//    }
// });

// };
