const questionArr = [

        "<p class = 'first question'>Q1 - My product or service is:</p></><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>An idea that I have been toying with for a while</button><button onclick = 'askQuestion(), secondScore()' type='button' class = 'btn btn-primary choice'>Currently under development, backed by solid market research and a business plan</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Finally a working prototype being tested by potential customers</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Now generating revenues</button>",

        "<p class = 'second question'>Q2 - My industry is:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Something that has to do with selling to the general public (retail, food, entertainment, etc.) or to the government</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>A field that nobody yet recognizes as being an industry, because my product is so cutting edge</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>One that was in fashion among investors a few years ago (telecommunications, Internet, B2Anything, etc.)</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>One that is currently in fashion among investors (medical devices, nanotechnology, proteomics, security software, money-saving enterprise software, etc.)</button>",
        
        "<p class = 'third question'>Q3 - My product or service will:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Have some novelty value (i.e., there is only minor demand for the product in the marketplace)</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Make life a bit easier or more enjoyable for many people, but not solve any fundamental problems (i.e., a 'nice to have but not a 'must have' for most buyers)</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Help a lot of people or companies do what they do a bit better, faster, and cheaper (i.e., the product addresses a fairly substantial need in the marketplace)</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Save lots of lives and/or money (i.e., the product is urgently needed in the marketplace)</button>",
        
        "<p class = 'fourth question'>Q4 - Global annual revenues in the sub-sector of the market I am competing in is:</p><button onclick =  'askQuestion(), firstScore()' type='button' class= 'btn btn-primary choice'>Under $500 million</button><button onclick =  'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>$500 million to $1 billion</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$500 million to $1 billion</button><button onclick =  'askQuestion()' type='button' class='btn btn-primary choice'>$1-5 billion</button><button onclick =  'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Over $5 billion</button>",

        "<p class = 'fifth question'>Q5 - My market is:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Flat or shrinking</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Growing by under 10% per year</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Growing by 10-30% per year</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Growing by more than 30% per year</button>",

        "<p class = 'sixth question'>Q6 - My primary competitors (others who are competing for the same consumer dollar by satisfying the same consumer need) are:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Nonexistent, since customers are not spending money to satisfy the need that I think they have</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Large companies with big R&D and marketing budgets and existing distribution channels (i.e., I'm entering a mature industry dominated by large competitors)</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Other startups that I may or may not know about (i.e., I'm entering a fairly new market being explored by other startups)</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Substitutes (e.g., the word processor is a substitute for the typewriter, which in turn is a substitute for pen and paper - in other words, what I offer is new and doesn't have a direct competitor yet, but customers have other ways to satisfy these needs)</button>",

         "<p class = 'seventh question'>Q7 - My customers (or potential customers) have:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Not been identified</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Expressed interest in what I am doing</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Helped my team develop the product specifications and have placed pre-orders</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Purchased and raved about my product, and have placed repeat orders</button>",

        "<p class = 'eighth question'>Q8 - My sales and marketing plan is:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>If I build it, they will come</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>If I build a website, optimize my keywords, and submit it to Google, they will come</button><button onclick = 'askQuestion(), thirdScore()', type='button' class='btn btn-primary choice'>I will hire a bunch of salespeople on commission only to go sell my product</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>I have an extensive, well-researched sales and marketing plan that includes a mix of proven, cost-effective sales and marketing tactics</button>",

      /* "<p class = 'ninth question'>Q9 - My revenues over the past 12 months were:</p><button onclick = 'askQuestion(), firstScore()'  type='button' class='btn btn-primary choice'>$0-$999,999</button><button onclick = 'askQuestion(), secondScore() 'type='button' class='btn btn-primary choice'>$1,000,000 - $4,999,999</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$5,000,000 or more</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>$10,000,000 or more</button>", 

        "<p class = 'tenth question'>Q10 - My revenues over the next 12 months are expected to be:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>$0-$999,999</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>$1,000,000 - $4,999,999</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$5,000,000 - $9,999,999</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>$10,000,000 or more</button>",

        "<p class = 'eleventh question'>Q11 - My revenues 5 years from now are expected to be:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Under $9,999,999</button><button onclick = 'askQuestion(), secondScore()'type='button' class='btn btn-primary choice'>$10,000,000 to $29,999,999</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$30,000,000 - $79,999,999</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>$80,000,000 or more</button>",

        "<p class = 'twelvth question'>Q12 - My strategic partnerships consist of:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>A few emails exchanged with this guy I met at a local networking event</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>A letter of intent drafted by a potential distributor for my product</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>A handful of legitimate signed partnerships and more in the works</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Exclusive R&D, licensing, supply, and distribution partnership agreements signed with a dozen Fortune 2000 companies</button>",

        "<p class = 'thirteenth question'>Q13 - My intellectual property includes:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>All this stuff in my head</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>A provisional patent application I prepared and filed myself</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Pending patents filed a couple of years ago</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Multiple issued patents in the U.S. and other major countries in Europe and Asia, comprising a total of 300 claims that broadly cover the entire value chain of my invention, along with various trademarks and service marks to protect my brand</button>",

        "<p class = 'fourtheenth question'>Q14 - The highest level of entrepreneurial experience achieved by anybody on my team consists of:</p><button onclick =  'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Reading Inc. and Fast Company magazines</button><button onclick =  'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Running a successful small business or franchise</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Working as a co-founder or early employee in a successful high-tech startup</button><button onclick =  'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Establishing, growing, and selling or IPOing a number of companies that many would recognize by name</button>",

        "<p class = 'fifteenth question'>Q15 - I developed my expertise in this market by excelling at senior positions in the industry for:</p><button onclick = 'askQuestion(), firstScore()'type='button' class='btn btn-primary choice'>Never</button><button onclick =  'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Under 2 years</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice' </button>2-5 years</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Over 5 years</button>",

        "<p class = 'sixteenth question'>Q16 - The number of Ph.D.s that have been working for me full time for at least three months is:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>None</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>1-4</button><button onclick =  'askQuestion(), thirdScore()'type='button' class='btn btn-primary choice'>5-9</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>10 or more</button>",

        "<p class = 'seventeenth question'>Q17 - The number of sales/marketing/ business development experts who understand and have extensive contacts within my industry who have been working for me full time for at least three months is:</p><button onclick =  'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>None</button><button onclick =  'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>1-4</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>5-9</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>10 or more</button>",

        "<p class = 'eighteenth question'>Q18 - My business plan:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Does not exist</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Suffers from quite a few of the mistakes described in 'Why Business Plans Don't Get Funded'</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Looks pretty near perfect in my eyes</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Looks pretty near perfect in the eyes of the advisors, attorneys, accountants, and investors who have seen it</button>",

        "<p class = 'nineteenth question'>Q19 - I have invested ______ hours of my own time into this venture.</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>0 - 999</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>1,000 - 1,999</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>2,000 - 3,999</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>4,000 or more</button>",

        "<p class = 'twentieth question'>Q20 - I have invested ______ of my own funds (from savings, credit cards, second mortgage, selling blood, etc.) into this venture.</p><button onclick =  'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>$0 - $24,999</button><button onclick =  'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>$25,000 - $99,999</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$100,000 - $249,999</button><button onclick =  'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>$250,000 or more</button>",     

        "<p class = 'twenty-first question'>Q21 - My corporate attorney is:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>My cousin Sal, who got his law degree at the local community college law school</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>A small local firm that normally specializes in personal injury suits</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>A small-to-medium sized local firm that works with a lot of startups</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>One of the nationally recognized corporate law firms with many connections in the venture capital community</button>",

        "<p class = 'twenty-second question'>Q22 - My intellectual property attorney is:</p><button onclick = 'askQuestion(), firstScore()'  type='button' class='btn btn-primary choice'>Did I tell you about my cousin Sal?</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>A small local firm that claims to be an intellectual property generalist</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>A small-to-medium sized local firm that works with a lot of startups</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>One of the nationally recognized intellectual property law firms staffed with attorneys who worked in R&D in my field before going to law school</button>",

        "<p class = 'twenty-third question'>Q23 - If a Fortune 500 company decided to put their resources behind competing with my startup tomorrow, my startup would be:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Toast</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Happy that the market is being validated by a major player, but would have to settle for a smaller market share</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Able to stay a step ahead through innovation, agility, and speed</button><button onclick = 'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Delighted to partner with them and license our proprietary technology to them, since there's no way they can get in this market without infringing on our rock-solid patents</button>",
        */
        "<p class = 'twenty-fourth question'>Q24 - Once my product is on the market, my marginal gross margins - a new dollar of revenue minus the cost of producing that revenue - will:</p><button onclick = 'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Huh?</button><button onclick = 'askQuestion(), secondScore()' type='button' class='btn btn-primary choice'>Essentially be flat, like a service business</button><button onclick = 'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>Increase gradually, like a hardware business</button><button onclick =  'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Increase rapidly, like a software business</button>",

        "<p class = 'twenty-fifth question'>Q25 - Other startups in my industry raising venture capital at a similar stage of development (product, management team, revenues, partnerships, prior funding, etc.) are getting pre-money valuations of:</p><button onclick =   'askQuestion(), firstScore()' type='button' class='btn btn-primary choice'>Under $1 million</button><button onclick =   'askQuestion(), secondScore()'  type='button' class='btn btn-primary choice'>$1-2 million</button><button onclick =  'askQuestion(), thirdScore()' type='button' class='btn btn-primary choice'>$2-5 million</button><button onclick =  'askQuestion(), fourthScore()' type='button' class='btn btn-primary choice'>Over $5 million</button>"
       
        ];  



        const finalScore = [
        "<h5< First response - it appears that your venture does not yet meet some of the criteria that typically interest professional investors. In general, you will need to achieve at least the second choice for most of the questions, and at least the third choice for questions 1-6, 11, 18, and 24 before professional investors will become very interested. However, every situation is different, so don't give up!</h5>", 
        "<h5> 2nd - Your compny could be worth ...</h5>",
        "<h5> 3rd - Your compny could be worth ...</h5>",
        "<h5> 4th - Your compny could be worth ...</h5>"
        ];

        const contactForm = '<div class="chat-form"><form name="contact"><input type="text" class="form-control" placeholder="Name"><input type="text" class="form-control" placeholder="Email"><textarea class="form-control" placeholder="Your Text Message"></textarea> <button class="btn btn-success btn-block">Submit</button></form></div>';


        const newQuestions = document.getElementById('opening');
        const updateScore = document.getElementById('scoring');
        const wrapper = document.getElementsByClassName('wrapper');
        const chatButton = document.getElementsByClassName('chat-btn');

        let i = 0;
        let j = 0;
        let score = 0;







        function askQuestion() {


                if (score <= 9 ){
                        j = 0;
                }
                if (score > 9 && score <= 18){
                        j = 1
                }
                if (score > 18 && score <= 27){
                        j = 2;
                }
                else  if (score > 27){
                        j = 3;
                }


                if (i<= questionArr.length-1) {
                newQuestions.innerHTML = questionArr[i];
                i++;
                } 
                else {
                newQuestions.innerHTML = finalScore[j]+ contactForm;
                }      
           }

       
       
        const firstScore = () => updateScore.innerHTML = score +=1;
        const secondScore = () => updateScore.innerHTML = score +=2;
        const thirdScore = () => updateScore.innerHTML = score +=3;
        const fourthScore = () => updateScore.innerHTML = score += 4;

        
        
        // close chat button
        function closeBox(){
                wrapper[0].style.opacity = "0";
                chatButton[0].style.opacity = "1";
        }


       
       // view box
        function viewBox() {
        wrapper[0].style.opacity = "1";
        chatButton[0].style.opacity = "0";
       }