import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div >

      <section className="hero-section mb-5">

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Network-issue" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="network-problem" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="No-connection" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </section>

      <section className="featured-posts mb-3"  >

        <div className="Container mb-3" >
          <h2 className=" common text-center text-uppercase py-2 mb-2">Featured Posts</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">White House</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content.</p>
              </div>
              <div className="card-footer ">
              <a href="#" class=" col-12 btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.webp?b=1&s=170667a&w=0&k=20&c=xMYWRFQjkmX7RKmysaydjkTlpExyXcixaFVP1psEI7Q=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bhavya Bhawan</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer contentThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content.</p>
              </div>
              <div className="card-footer">
              <a href="#" class=" col-12 btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://media.istockphoto.com/id/1448381278/photo/the-side-view-of-a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-a-three.webp?b=1&s=170667a&w=0&k=20&c=pHHNxKMgY-i5VMo9nd4viatxxhGVbD8X6ZUwRqQlwVw=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dua's House</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content.</p>
              </div>
              <div className="card-footer">
              <a href="#" class=" col-12 btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="latest-posts my-5">
        <div className="Container" >
          <h2 className=" common text-center text-uppercase py-2">Latest Posts</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1147674297/photo/single-family-new-construction-home-in-suburb-neighborhood-in-the-south.webp?b=1&s=170667a&w=0&k=20&c=JgvKH7hV2N0SHB_JIBT88drjkQvz3WjyX48Nz7YKe_E=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Designed-House</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1311442955/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=bBujhgRF2aTSgs5iaIFkNZOsHpFWmGGILwDfYwuu-EE=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Printed House</h5>
                <p class="card-text">This is a short This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1063241070/photo/modern-living-room-interior-with-nature-view-3d-render.webp?b=1&s=170667a&w=0&k=20&c=BmgAdDyxd6qcxE1fgflwdT0Ca2qRxfzto028ac4W644=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">super House</h5>
                <p class="card-text">This is a longer card with supporting text below This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.webp?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bhavya Bhawan</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.webp?b=1&s=170667a&w=0&k=20&c=xMYWRFQjkmX7RKmysaydjkTlpExyXcixaFVP1psEI7Q=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">React House</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.webp?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bootstrap House</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="our-posts">

        <div className="container-fluid btn btn-primary mb-4" style={{ minHeight: "150px" }}>

          <h2 className=" thanks text-center text-uppercase mb-3 mt-3"> Thanks for visiting our pages</h2>

          <button type="button" className=" thanks1 btn btn-warning">Contact-Us</button>


        </div>

      </section>

      <section className="portfolio-section">
        <div className="Container" >
          <h2 className=" common text-center text-uppercase py-2">Our portfolio</h2>
        </div>

        <div className="container overflow-hidden text-center">
          <div className="row gy-5">
            <div className="col-6">
              <div className="p-3"><img src="https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.webp?b=1&s=170667a&w=0&k=20&c=xMYWRFQjkmX7RKmysaydjkTlpExyXcixaFVP1psEI7Q=" className="card-img-top" alt="..." />


              </div>
            </div>
            <div className="col-6">
              <div className="p-3"><img src="https://media.istockphoto.com/id/1440269204/photo/interior-design-of-a-beautiful-kitchen-with-a-large-island-in-a-modern-new-england-colonial.webp?b=1&s=170667a&w=0&k=20&c=9W3WAcKaHzxBiIiCi_hJ_RizyDe7ISx9wgby8o3XAYM=" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3"><img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3"><img src="https://media.istockphoto.com/id/1421422160/photo/interior-of-living-room.webp?b=1&s=170667a&w=0&k=20&c=wSTh-QHxbzidn3tdRFy_mS09fwiVEqBExJpPX9OhUXI=" className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 text-center">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3"><img src="https://media.istockphoto.com/id/1208205959/photo/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-kitchen-in-new-luxury-home.webp?b=1&s=170667a&w=0&k=20&c=BVn5miDsbCPQAZgmdQAUcXGr3YUtHuM6uYnDn0xRSK0=" className="card-img-top" alt="..." /></div>
            </div>
            <div className="col">
              <div className="p-3"><img src="https://media.istockphoto.com/id/1178764767/photo/front-view-of-blue-house-with-siding-in-the-suburbs.webp?b=1&s=170667a&w=0&k=20&c=Ozf2vHj-Jv8JV1Uxno2kveDk3cFLfx8wfnBGiGy_Qoo=" className="card-img-top" alt="..." /></div>
            </div>
          </div>
        </div>

      </section>



    </div >
  )
}

export default Home
