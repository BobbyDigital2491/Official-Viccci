import React from 'react';

const Team = () => {
  const team = [
    {
      avatar: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/215165627_10158703911782600_4023616782383536024_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r8j8taE1ZAQAb55AfLh&_nc_ht=scontent-lga3-2.xx&oh=00_AfCfQ3p0_NgPaQnIhpqFhddIgbqf2eXIfxt34uizLCBzSg&oe=661896D9",
      name: "Ej Gailliard",
      title: "Co - Founder / Data Analyst",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      profile: "/ej",
    },
    {
      avatar: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/138327123_4089409134408752_976800681428512076_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wNlCdsdN2HwAb5dmc5d&_nc_oc=Adi88OWOSXgeSb6g9cqM73X9qfY9AXyehJFMX491vYqlDOoiCpz1HngbLmC1-1s1g2E&_nc_ht=scontent-lga3-2.xx&oh=00_AfArOYxMkvnQnSonV8QZ1GwrlaqpEfFh6LHwBWFhBm5jnQ&oe=663A42A0",
      name: "Robert Lawrence",
      title: "Co - Founder / C.T.O",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      profile: "/RobertLawrence",
    },{
      avatar: "/zo.jpg",
      name: "Alfonzo Hamlin",
      title: "Marketing Director",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      profile: "/AlfonzoHamlin",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl mb-3">
          Leadership at<span className='text-sky-400'> Viccci Protocol</span>
          </h3>
          <p className="text-gray-200">
            Business don't run themselves
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((item, idx) => (
            <div key={idx} className="bg-black rounded-xl overflow-hidden shadow-md">
              <div className="aspect-w-4 aspect-h-3">
                <a src={item.profile}></a>
                <img
                  src={item.avatar}
                  className="object-cover w-full h-96 rounded-t-xl"
                  alt=""
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg text-white font-semibold">{item.name}</h4>
                <p className="text-sky-400">{item.title}</p>
                
                <div className="mt-3 flex gap-4 text-gray-400">
                <a href={item.profile}
                    className="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-200">See Profile
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
