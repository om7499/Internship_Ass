//name usname phon city company name  email companyemail salary

user =  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  }

  //  name , username ,email
  const{name ,username , email} = user
   console.log(name ," ",username," ",email)

  
   // Address
   const{address:{city,zipcode}} = user
  console.log(city+" "+zipcode)


