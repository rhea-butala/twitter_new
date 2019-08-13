
process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../routes/server');
const should = chai.should();
var expect = chai.expect();

chai.use(chaiHttp);
chai.use(chaiHttp)
var expect = require('chai').expect;

let tweet = {
      
    'post_text': 'hello evryone',
    'media': 'home/tweet_image/pic01.jpg'
    
  };



// describe(' user if exists for login', () => {
//     it('it should Get  user', (done) => {
//         const data={
//             'Name':'rhea',
//             'password':'helloworld'
//         }
//         chai.request(app)
        
//         .post('/ajaxLogin')
//         .set('Accept', 'application/json')
        
        
//         .send(data)
        
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
            
//             data.should.have.property('Name');
//             data.should.have.property('password');
            
//             res.should.be.json;
//             done();
//         });
//     });
    
// });

describe(' /post tweets',function(){
    it('should add a tweet on /home/:name/tweets',function(done){
        
        chai.request(app)
        .post(`/home/tweets`)
        .send(tweet)
        .end(function(err,res){
            res.should.have.status(200);
            res.body.should.be.a('object');
           // emp.should.have.property('id');
            tweet.should.have.property('post_text');
            tweet.should.have.property('media');
            //tweet.should.have.property('name');
            done();
            //tweet.should.have.property('years_of_experience'); 
        })
    })
})

describe('/post like tweets',function(){
    it('should add a  like on tweet on /home/:name/likepost',function(done){
        
        
        chai.request(app)
        .post(`/home/likepost`)
        .send(tweet)
        .end(function(err,res){
            res.should.have.status(200);
            res.body.should.be.a('object');
           // emp.should.have.property('id');
            //tweet.should.have.property('post_text');
            //tweet.should.have.property('media');
            //tweet.should.have.property('name');
            done();
            //tweet.should.have.property('years_of_experience'); 
        })
    })
})
describe('search profile for follow',function(){
    it('search profile for follow',function(done){
        
        const data={
            'searchname':'anoop',
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/searchprofile`)
        .send(data)
        .end(function(err,res){
            res.should.have.status(200);
           // res.body.should.be.a('object');
           // emp.should.have.property('id');
           // tweet.should.have.property('user_handle');
            //tweet.should.have.property('media');
            //tweet.should.have.property('name');
            done();
            //tweet.should.have.property('years_of_experience'); 
        })
    })
})

describe('/GET tweets if exists for displaytweets', () => {
    it('/displaytweets', (done) => {
        
        data={
            'userhandle':'irine'
        }
        chai.request(app)
        
        .post(`/home/displaytweets`)
        .send(data)
        .end((err, res, body) => {
            res.should.have.status(200);
            
           
            res.should.be.json;
            done();
        });
    });
    
});


describe('/GET followers ', () => {
    it('it should Get all followers', (done) => {
       data={
           'name':'sonali'
       }
        chai.request(app)
       
        .post(`/home/followers` )
        .send(data)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
            //expect(res.body).to.have.lengthOf.above(0);
            expect(res.body[0]).to.have.property('user_id');
            expect(res.body[0]).to.have.property('follower_id');
           
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});
describe('/GET hashtag ', () => {
    it('it should Get all hashtags', (done) => {
       var data={
           'hashtag':'#hello',
           'name':'irine'
       }
       
        
        chai.request(app)
       
        .post(`/home/searchhashtag` )
        .send(data)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
           
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});

describe('/GET following ', () => {
    it('it should Get all following', (done) => {
        data={
            'name':'sonali'
        }
        chai.request(app)
       
        .post(`/home/following` )
        .send(data)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
            //expect(res.body).to.have.lengthOf.above(0);
            expect(res.body[0]).to.have.property('user_id');
            expect(res.body[0]).to.have.property('follower_id');
           
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});


// describe('/GET editprofileget ', () => {
//     it('it should Get user profile image', (done) => {
//       var  data={
//             'name':'sonali',
            
//         }
//         chai.request(app)
       
//         .post(`/home/editprofileget` )
//         .send(data)

//         .end((err, res) => {
//             res.should.have.status(200);
           
           
           
//             res.should.be.json;
//             //console.log(res.body);
//             done();
//         });
//     });
    
// });

describe('/GET all tweets for a user ', () => {
    it('it should Get all  tweets', (done) => {
      var data={
            'name':'sonali',
            
        }
        chai.request(app)
       
        .post(`/home/globaltweets` )
        .send(data)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
            //expect(res.body).to.have.lengthOf.above(0);
          data.should.have.property('name');
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});



describe('/editprofile update image', () => {
    it('Update user profile image', (done) => {
        data={
            'name':'sonali',
            'profile_image': '/home/profile_image/img.jpg'
        }
      
        chai.request(app)
        .post(`/home/editprofile`)
        .send(data)
        .end((err, res) => {
            
            res.should.have.status(200);
            res.body.should.be.a('object');
            //console.log(res.body);
            //expect(res.body[0]).to.have.property('user_handle');
            data.should.have.property('profile_image');
           
           
            
           
            done();
        });
    });
});


describe(' forgot password email',()=>{
    it('should get user if exist on /for_pass',function(done){
       const data={
            'user_handle':'rhea'
        }
        chai.request(app)
        .post(`/for_pass`)
        .send(data)
        .end(function(err,res){
        
            res.should.have.status(200);
            res.body.should.be.a('object');
            data.should.have.property('user_handle');
            done();
            
        })
    })
})



// describe('/delete delete tweet',()=>{
//     it('should delete a tweet on /home/:name/delete_tweet',function(done){
//         const name ='rhea';
//         //var tweet_id=12;
//         const data={
            
//             'tweet_id':12


//         }
//         this.timeout(10000);
//         // let data={
//         //     'tweet_id':3
//         // }       
//         chai.request(app)
//         .delete(`/home/${name}/delete_tweet`)
//         .send(data)
//         .end(function(err,res){
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//            data.should.have.property('tweet_id');
//             done();
           
//         })
            
//         })
 
// })





// describe(' /post retweets',function(){
//     it('should add a tweet on /home/:name/tweets',function(done){
//         var data ={
//             'userhandle':'mitchelle',
//             'tweet_id':12
//         }
//         this.timeout(10000);
        
//         var name ='sonali';
//         chai.request(app)
//         .post(`/home/${name}/retweetpost`)
//         .send(data)
//         .end(function(err,res){
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//            // emp.should.have.property('id');
//             data.should.have.property('userha');
//             data.should.have.property('media');
//             //tweet.should.have.property('name');
//             done();
//             //tweet.should.have.property('years_of_experience'); 
//         })
//     })
// })


describe('search profile for unfollow',function(){
    it('search profile for unfollow',function(done){
        
        const data={
            'searchname':'anoop',
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/searchprofileunfollow`)
        .send(data)
        .end(function(err,res){
            res.should.have.status(200);
           // res.body.should.be.a('object');
           // emp.should.have.property('id');
           // tweet.should.have.property('user_handle');
            //tweet.should.have.property('media');
            //tweet.should.have.property('name');
            done();
            //tweet.should.have.property('years_of_experience'); 
        })
    })
})



describe('like post',function(){
    it('like post',function(done){
      
        const data={
            'tweet-id':12,
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/like`)
        .send(data)
        .end(function(err,res){
            res.should.have.status(200);
           // res.body.should.be.a('object');
           // emp.should.have.property('id');
           // tweet.should.have.property('user_handle');
            //tweet.should.have.property('media');
            //tweet.should.have.property('name');
           

            done();
            //tweet.should.have.property('years_of_experience'); 
        })
    })
})