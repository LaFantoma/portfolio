import('../skills/Skills.css');
export default function Skills() {

    return (
        <>

            <h1 className="mb-2 satisfy-regular" style={{ fontSize: '50px' }}>My skills</h1>
            {/* <img src="stella.png" className="" style={{ width: '3%' }} /> */}
            <div className="row d-flex my-5" style={{ width: "70%" }}>
                <div className="row m-3">
                    <h2 className="comfortaa-about text-decoration-underline">Programming languages</h2>
                    <div className='col'>
                        <p style={{ fontSize: '30px' }}>Java</p>
                        <ul style={{ listStyleType: 'circle', marginLeft: '10px' }}>
                            <li style={{ fontSize: '20px' }}>Spring</li>
                            <li style={{ fontSize: '20px' }}>JPA</li>
                            <li style={{ fontSize: '20px' }}>Restfull API</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <p style={{ fontSize: '30px' }}>Javascript</p>
                        <ul style={{ listStyleType: 'circle', marginLeft: '10px' }}>
                            <li style={{ fontSize: '20px' }}>React</li>
                            <li style={{ fontSize: '20px' }}>CSS</li>
                            <li style={{ fontSize: '20px' }}>Bootstrap</li>
                        </ul>
                    </div>
                    <div className='col-auto'>
                        <p style={{ fontSize: '30px' }}>MySQL</p>
                        <p style={{ fontSize: '30px' }}>C++</p>
                    </div>
                    <hr />
                    <h2 className="comfortaa-about text-decoration-underline mt-3">Tools</h2>
                    <div className='row'>

                        <div className='col-auto me-5'>
                            <p style={{ fontSize: '30px' }}>GitHub</p>
                            <p style={{ fontSize: '30px' }}>Visual Studio Code</p>
                        </div>
                        <div className='col-auto ms-5'>
                            <p style={{ fontSize: '30px' }}>Eclipse</p>
                            <p style={{ fontSize: '30px' }}>Postman</p>
                        </div>

                    </div>
                </div>
            </div>
            <img src="computer.png" style={{ position: 'absolute', top: 150, right: 100, width: '25%' }} />
        </>
    );
}