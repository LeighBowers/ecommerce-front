<template>
  <!--    Contacts    -->
  <section id="contact">
    <section class="contact-page-sec">
      <div class="contact-title"><h1>Contact Us</h1></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-map-marked"></i>
                </div>
                <div class="contact-info-text">
                  <h2>address</h2>
                  <span>Cape Towns </span>
                  <span>South Africa</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info-text">
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-info-text">
                  <h2>Contact Details</h2>
                  <span>Cell: 0658820592</span>
                  <span>Alternitive: 0769093578</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="contact-page-form">
              <h2>Get in Touch</h2>
              <form @submit.prevent="handleSubmit" method="post">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <lable>Name:</lable>
                      <input type="name" required v-model="name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <lable>Email:</lable>

                      <input type="email" required v-model="email" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <lable>Phone Number:</lable>
                      <input type="phone" required v-model="phone" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <lable>Subject</lable>
                      <input type="subject" required v-model="subject" />
                    </div>
                  </div>
                  <div class="col-md-12 message-input">
                    <div class="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="single-input-fieldsbtn">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="copy"><p class="copyright">Company Name © 2022</p></div>
  </section>
</template>
            
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
    };
  },

  methods: {
    handleSubmit() {
      console.log(this.name, this.email, this.phone, this.subject);

      fetch("https://ecommerce-pr.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => alert((json.msg = "Form has been submitted.")))
        .catch((e) => alert((e.msg = "Form has failed to submit.")));
    },
  },
};
</script>

<style>
#contact {
  margin-top: -100px;
}
.contact-title {
  position: relative;
  padding-bottom: 40px;
}
.contact-title {
  position: relative;
  color: #12777eec;
  font-size: 18px;
  font-weight: 700;
  padding-right: 50px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: capitalize;
}
.contact-title :before {
  position: absolute;
  content: "";
  right: 0px;
  bottom: 7px;
  width: 40px;
  height: 1px;
  background-color: #12777eec;
}
section {
  padding: 60px 0;
  min-height: 100vh;
}
.contact-info {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.contact-info-icon {
  margin-bottom: 15px;
}
.contact-info-item {
  background: #9e9090bd;
  padding: 30px 0px;
}
.contact-page-sec .contact-page-form h2 {
  color: #12777eec;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 700;
}

.contact-page-form .col-md-6.col-sm-6.col-xs-12 {
  padding-left: 0;
}
.contact-page-form.contact-form input {
  margin-bottom: 5px;
}
.contact-page-form.contact-form textarea {
  height: 110px;
}

.contact-info-icon i {
  font-size: 48px;
  color: #12777eec;
}
.contact-info-text p {
  margin-bottom: 0px;
}
.contact-info-text h2 {
  color: rgb(49, 45, 45);
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact-info-text span {
  color: #353131;
  font-size: 16px;
  /* font-weight: ; */
  display: inline-block;
  width: 100%;
}

.contact-page-form input {
  background: #9e9090bd none repeat scroll 0 0;
  border: 1px solid #f9f9f9;
  margin-bottom: 20px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
}

.contact-page-form .message-input {
  display: inline-block;
  width: 100%;
  padding-left: 0;
}
.single-input-field textarea {
  background: #9e9090bd none repeat scroll 0 0;
  border: 1px solid #535e64;
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  border-radius: 4px;
}
.single-input-fieldsbtn input[type="submit"] {
  background: #12777eec none repeat scroll 0 0;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 10px 0;
  text-transform: capitalize;
  width: 150px;
  margin-top: 20px;
  font-size: 16px;
  margin-left: 300%;
}
.single-input-fieldsbtn input[type="submit"]:hover {
  background: #071c34;
  transition: all 0.4s ease-in-out 0s;
  border-color: #071c34;
}
.single-input-field h4 {
  color: #464646;
  text-transform: capitalize;
  font-size: 14px;
}
.contact-page-form {
  display: inline-block;
  width: 100%;
  margin-top: -80px;
  padding-top: 10%;
}

.contact-page-form form {
  padding: 20px 15px 0;
}

/* footer */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.social_links {
  padding: 1rem;

  margin-top: 2rem;

  flex-wrap: wrap;
  justify-content: center;
}
.social_links .combo {
  transform: scale(0.9);
  transition: 0.4s ease-in;
  margin: 0 0.5rem;
  height: 3em;
  width: 3em;
  line-height: 3em;
}
.combo .circle {
  color: #f9f9f9;
  transition: 0.4s ease-in;
  font-size: 3em;
}
.combo .icon {
  color: #444343;
  font-size: 2rem;
  transform: translateY(1px);
  transition: 0.2s ease-in;
}
.combo:hover {
  transform: scale(1.1);
}
.combo:hover,
.combo:hover .icon {
  color: white;
}

.fb:hover,
.fb:hover .circle {
  color: #10151a;
}

.tw:hover,
.tw:hover .circle {
  color: #191f24;
}
.gt:hover,
.gt:hover .circle {
  color: #1f1f1f;
}
.copy {
  margin-right: 5%;
}
</style>