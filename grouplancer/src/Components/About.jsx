import React from 'react'

const About = (props) => {
    const { cardcolor } = props;
    return (
        <>
            <div className="container">
                <h1 id='heading'>Why to use Grouplancer?</h1>
                <section>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                </section>
            </div>

            <div className="container">
                <h1 id='heading'>How to use Grouplancer?</h1>
                <section>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                    <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
                    </article>
                </section>
            </div>
            <hr />
        </>
    )
}

export default About