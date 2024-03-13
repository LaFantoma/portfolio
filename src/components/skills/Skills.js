import('../skills/Skills.css');
export default function Skills() {

    return (
        <>

            <h1 className="mb-2 satisfy-regular" style={{ fontSize: '50px' }}>My skills</h1>
            {/* <img src="stella.png" className="" style={{ width: '3%' }} /> */}
            <div className="row d-flex my-5" style={{ width: "70%" }}>
                <div className="col m-3 justify-content-between">
                    <h1 className="comfortaa-about text-decoration-underline">back-end</h1>
                    <p style={{ fontSize: '40px' }}>Java</p>


                    <ul style={{ listStyleType: 'circle', marginLeft: '10px' }}>
                        <li style={{ fontSize: '30px' }}>Spring</li>
                        <li style={{ fontSize: '30px' }}>JPA</li>
                        <li style={{ fontSize: '30px' }}>Restfull API</li>
                    </ul>
                    <p style={{ fontSize: '40px' }}>MySQL</p>


                </div>
                <div className="col m-3 justify-content-center">
                    <h1 className="comfortaa-about text-decoration-underline">front-end</h1>
                    <p style={{ fontSize: '40px' }}>Javascript</p>
                    <ul style={{ listStyleType: 'circle', marginLeft: '10px' }}>
                        <li style={{ fontSize: '30px' }}>React</li>
                        <li style={{ fontSize: '30px' }}>CSS</li>
                        <li style={{ fontSize: '30px' }}>Bootstrap</li>
                    </ul>

                </div>
                <div className="col-auto m-3 justify-content-center">
                    <h1 className="comfortaa-about text-decoration-underline">others</h1>

                    <p style={{ fontSize: '40px' }}>GitHub</p>
                    <p style={{ fontSize: '40px' }}>C++</p>
                    <h1></h1>
                </div>
            </div>
            <img src="computer.png" style={{ position: 'absolute', top: 150, right: 100, width: '25%' }} />
        </>
    );
}