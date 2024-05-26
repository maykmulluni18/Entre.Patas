import React, { useEffect, useState } from "react"



function  VistaGneral () {
    const [name, setName] = useState('');

    useEffect(() =>{
        setName('Gato');
    },[])
        let u = 0;

    const cambio = () =>{
        let b = 1;
        setName(b + 1);
    }
    // function cambio(){

    // }
    return(
  <>
    <header>
        <div className="container_12">
            <div className="grid_12">
                <h1><a href="index.html"><img src="images/logo.png" alt=""/></a></h1>
                <div className="menu_block">
                    <nav>
                        <ul className="sf-menu">
                            <li className="current"><a href="index.html">Home</a></li>
                            <li className="with_ul"><a href="about-us.html">About Us</a>
                                <ul>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Archive</a></li>
                                </ul>
                            </li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    </header>
    <div className="top_block">
        <div className="slider-relative">
            <div className="slider-block">
                <div className="slider">
                    <ul className="items">
                        <li><img src="images/slide.jpg" alt=""/>
                            <div className="banner">They Need Your <span>Love</span> and <i>Care</i>
                                <p>It is so easy to make them happy</p>
                            </div>
                        </li>
                        <li><img src="images/slide1.jpg" alt=""/>
                            <div className="banner">They Need Your <span>Love</span> and <i>Care</i>
                                <p>It is so easy to make them happy</p>
                            </div>
                        </li>
                        <li><img src="images/slide2.jpg" alt=""/>
                            <div className="banner">They Need Your <span>Love</span> and <i>Care</i>
                                <p>It is so easy to make them happy</p>
                            </div>
                        </li>
                        <li><img src="images/slide3.jpg" alt=""/>
                            <div className="banner">They Need Your <span>Love</span> and <i>Care</i>
                                <p>It is so easy to make them happy</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="page1_block">
        <div className="container_12">
            <div className="grid_6">
                <h2>Welcome to Our Site</h2>
                <br/>
                <img src="images/page1_img5.jpg" alt="" className="img_inner fleft"/>
                <div className="extra_wrapper style1">
                    <p className="text1"><a href="#">Click here</a> for more info about this free website template created by TemplateMonster.com</p>
                    Hibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis.
                </div>
                <div className="clear"></div>
                Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus. Praesent quis orci eget diam viverra consequat. Fusce sagittis.
                <br/>
                <a href="#" className="btn">More</a>
            </div>
            <div className="grid_5 prefix_1">
                <h2 className="ic1">Latest News</h2>
                <ul className="list">
                    <li>
                        <span>
                            {/* <time datetime="2045-01-01">27<span>APR</span></time> */}
                        </span>
                        <div className="extra_wrapper">
                            <div className="col1"><a href="#">Duis posuere consectetur pellentesque;</a>
                                {/* <time datetime="2045-01-01">April 27.03.45</time> */}
                            </div>
                            Sed nisi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque suscipit eu ante. Nullam vitae dolor ullamcorper felis es.
                        </div>
                    </li>
                    <li>
                        <span className="cnt">
                            {/* <time datetime="2045-01-01">28<span>APR</span></time> */}
                        </span>
                        <div className="extra_wrapper">
                            <div className="col1"><a href="#">Kuuis posuere consectetur pellentesque;</a>
                                {/* <time datetime="2045-01-01">April 28.03.45</time> */}
                            </div>
                            Sed nisi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et suscipit eu ante. Nullam vitae dolor ullamcorper felis es.
                        </div>
                    </li>
                    <li>
                        <span>
                            {/* <time datetime="2045-01-01">29<span>APR</span></time> */}
                        </span>
                        <div className="extra_wrapper">
                            <div className="col1"><a href="#">Opuis posuere honsectetur pellentesque;</a>
                                {/* <time datetime="2045-01-01">April 29.03.45</time> */}
                            </div>
                            Sed nisi turpis, pellentesque at ultrices in, dapibus in magna. Nunc easi diam risus, placerat ut scelerisque et suscipit eu ante. Nullam vitae dolor ullamcorper felis es.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="content page1">
        <div className="container_12">
            <div className="grid_12"><a href="#" className="next"></a><a href="#" className="prev"></a>
                <h2>Pets for Adoption</h2>
            </div>
            <div className="clear"></div>
            <ul className="carousel1">
                <li className="grid_4">
                    <img src="images/carousel1_img1.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
                <li className="grid_4">
                    <img src="images/carousel1_img2.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
                <li className="grid_4">
                    <img src="images/carousel1_img3.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
                <li className="grid_4">
                    <img src="images/carousel1_img4.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
                <li className="grid_4">
                    <img src="images/carousel1_img5.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
                <li className="grid_4">
                    <img src="images/carousel1_img6.jpg" alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper pad1">
                        <p className="col2"><a href="#">Praesent quis orci diam viverra.</a></p>
                        Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus.
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div className="bottom_block">
        <div className="container_12">
            <div className="grid_6">
                <h2>Pet Care Tips</h2>
                <br/>
                Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit a convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. Fusce fringilla erat ac urna pellentesque congue. Nunc fringilla diam sit amet adipiscing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel consequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus. Praesent quis orci eget diam viverra consequat. Fusce sagittis.
            </div>
            <div className="grid_4 prefix_2">
                <h2 className="ic1">Any Question?</h2>
                <img src="images/page1_img4.jpg" alt="" className="fleft img_inner"/>
                <div className="extra_wrapper">
                    <div className="cont">Call Us Free: <span>+1 800 559 6580</span></div>
                </div>
                <div className="clear"></div>
                Nunc fringilla, diam sit amet adipiscing bibendum turpis velit feugiat urna, et pharetra neque nisi ac nunc. Vivamus est quam dapibus ullamcorper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris.
            </div>
        </div>
    </div>
    <footer>
        <div className="container_12">
            <div className="grid_12">
                <div className="socials"><a href="#"></a> <a href="#"></a> <a href="#"></a> <a href="#"></a></div>
                <p>Pet Club &copy; 2045 | <a href="#">Privacy Policy</a> | Design by: <a href="http://www.templatemonster.com/">TemplateMonster.com</a></p>
            </div>
            <div className="clear"></div>
        </div>
    </footer>
  </>
    
    )
}

export default VistaGneral;