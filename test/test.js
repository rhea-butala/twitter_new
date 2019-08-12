
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
        var name ='rhea';
        chai.request(app)
        .post(`/home/${name}/tweets`)
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
        var name ='rhea';
        
        chai.request(app)
        .post(`/home/${name}/likepost`)
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
        var name ='mitchelle';
        const data={
            'searchname':'anoop',
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/${name}/searchprofile`)
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
        var name ='mitchelle';
        
        chai.request(app)
        
        .get(`/home/${name}/displaytweets`)
        .end((err, res, body) => {
            res.should.have.status(200);
            //console.log(res.body);
            //res.name.should.equal("moona");
           // expect(res.body).to.be.an.instanceof(Array);
            expect(res.body).to.have.lengthOf.above(0);
            expect(res.body[0]).to.have.property('tweet_id');
            expect(res.body[0]).to.have.property('post_text');
            expect(res.body[0]).to.have.property('hashtag');
            expect(res.body[0]).to.have.property('media');
            expect(res.body[0]).to.have.property('userhandle');
            expect(res.body[0]).to.have.property('created_at');
            expect(res.body[0]).to.have.property('updated_at');
            res.should.be.json;
            done();
        });
    });
    
});


describe('/GET followers ', () => {
    it('it should Get all followers', (done) => {
        var name='sonali';
        chai.request(app)
       
        .get(`/home/${name}/followers` )
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
        var hashtag='#hello';
        var name='mitchelle';
        chai.request(app)
       
        .post(`/home/${name}/searchhashtag` )
        .send(hashtag)
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
        var name='sonali';
        chai.request(app)
       
        .get(`/home/${name}/following` )
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


describe('/GET editprofileget ', () => {
    it('it should Get user profile image', (done) => {
        var name='sonali';
        chai.request(app)
       
        .get(`/home/${name}/editprofileget` )
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
            //expect(res.body).to.have.lengthOf.above(0);
            expect(res.body[0]).to.have.property('profile_image');
           
           
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});

describe('/GET all tweets for a user ', () => {
    it('it should Get all  tweets', (done) => {
        var name='sonali';
        chai.request(app)
       
        .get(`/home/${name}/globaltweets` )
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.an.instanceof(Array);
            //expect(res.body).to.have.lengthOf.above(0);
            expect(res.body[0]).to.have.property('profile_image');

            expect(res.body[0]).to.have.property('tweet_id');
            expect(res.body[0]).to.have.property('post_text');
            expect(res.body[0]).to.have.property('hashtag');
            expect(res.body[0]).to.have.property('media');
            expect(res.body[0]).to.have.property('userhandle');
            expect(res.body[0]).to.have.property('updated_at');
            expect(res.body[0]).to.have.property('likecount');
            expect(res.body[0]).to.have.property('user_retweeted');
            expect(res.body[0]).to.have.property('created_at');
            res.should.be.json;
            //console.log(res.body);
            done();
        });
    });
    
});



describe('/editprofile update image', () => {
    it('Update user profile image', (done) => {
        var post_data = {
            
            'profile_image': 'home/profile_image' + 'img.jpg'
            
    
        }
        var name = 'mitchelle';
        chai.request(app)
        .put(`/home/${name}/editprofile`)
        .send(post_data)
        .end((err, res) => {
            
            res.should.have.status(200);
            res.body.should.be.a('object');
            //console.log(res.body);
            //expect(res.body[0]).to.have.property('user_handle');
            post_data.should.have.property('profile_image');
           
           
            
           
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
        var name ='mitchelle';
        const data={
            'searchname':'anoop',
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/${name}/searchprofileunfollow`)
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
        var name ='mitchelle';
        const data={
            'tweet-id':12,
            
            'name':'sonali'
            
            
            
        }
        chai.request(app)
        .post(`/home/${name}/like`)
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