import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import './Body.css';



export default class Body extends Component {

  handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Mon_CV.pdf`;
    link.download = 'Mon_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <>

        {/* Début de la cover du portfolio */}

        <div className='cover'>

          <div id="typing-text"></div>

        </div>

        {/* Fin de la cover du portfolio*/}

        {/* Début de ma présentation */}

        <div className='rounded-card'>
          <div className='maphoto'>

          </div>
          <div className='description'>
            <h1 class="animate__animated animate__hinge">Je me présente</h1>
            <p>
              Bonjour, je suis AZOH Marie-Emmanuelle, développeuse Web. <br />
              Mon travail consiste à créer des sites internet. <br />
              J'adore apporter des idées nouvelles dans ce domaine et <br />
              je suis très motivée pour relever de nouveaux défis. <br />
              J'espère pouvoir contribuer positivement à l'univers du web avec <br />
              mes compétences et ma créativité.
            </p>
          </div>
        </div>

        {/* Fin de ma présentation */}

        {/* Début de la présentation de mes skills */}



        <div className='skills'>
          <div className='titrecompet'>
            <h1>Mes Compétences</h1>
          </div>

          <div className='crea'>

            <div className='skill'>
              <div className='photo'>
                <img src='images/ps.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>PHOTOSHOP</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/ai.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>ILLLUSTRATOR</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/id.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>In Design</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/xd.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}></h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/pr.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>PREMIERE PRO</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '40%' }}>40%</div>
              </div>
            </div>


          </div>

          <div className='front'>

            <div className='skill'>
              <div className='photo'>
                <img src='images/html2.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}></h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '80%' }}>80%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/css.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}></h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '80%' }}>80%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/javascript.gif' style={{ width: '70px' }}></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>JAVASCRIPT</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '40%' }}>40%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/bootstrap.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>BOOTSTRAP</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '80%' }}>80%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/react.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>React</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '30%' }}>30%</div>
              </div>
            </div>


          </div>



          <div className='back'>

            <div className='skill'>
              <div className='photo'>
                <img src='images/php.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}></h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '40%' }}>40%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/laravel.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>LARAVEL</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '40%' }}>40%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/git.gif'></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>Git</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/mysql.png' style={{ width: '65px' }}></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>MySQL</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '75%' }}>75%</div>
              </div>
            </div>

          </div>

          <div className='cms'>

            <div className='skill'>
              <div className='photo'>
                <img src='images/images.png' style={{ width: '60px' }}></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>Wordpress</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '75%' }}>75%</div>
              </div>
            </div>

            <div className='skill'>
              <div className='photo'>
                <img src='images/joomla.jpeg' style={{ width: '60px' }}></img>
                <h4 style={{ fontSize: '15px', color: '#f0f7fe' }}>Joomla</h4>
              </div>

              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100px' }}>
                <div class="progress-bar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
          </div>



        </div>
        {/* Fin de la présentation de mes skills */}

        {/* Début de la présentation de mes projets */}
        <div className="container d-flex flex-wrap">

          <h1 className='project' >
            Mes Projets
          </h1>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img className='card-img-top' width="100%" height="225" src='images/site yango.png'></img>
                <div className="card-body" style={{ color: '#1a2c51', fontWeight: '500' }}>
                  <p className="card-title"> YANGO</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://marie-emmanuelle2023.github.io/Yango_site/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-md btn-outline-primary">Visiter le site</button>

                      </a>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className='card-img-top' width="100%" height="225" src='images/didi.png'></img>
                <div className="card-body" style={{ color: '#1a2c51', fontWeight: '500' }}>
                  <p className="card-title">MOJAVELI- DIDI B</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">

                      <a href="https://marie-emmanuelle2023.github.io/MOJAVELI/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-md btn-outline-primary">Visiter le site</button>
                      </a>


                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className='card-img-top' width="100%" height="225" src='images/lorraine.png'></img>
                <div className="card-body" style={{ color: '#1a2c51', fontWeight: '500' }}>
                  <p className="card-title">LORRAINE'S</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://marie-emmanuelle2023.github.io/Lorraine-s/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-md btn-outline-primary">Visiter le site</button>
                      </a>


                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img className='card-img-top' width="100%" height="225" src='images/exam.PNG'></img>
                <div className="card-body" style={{ color: '#1a2c51', fontWeight: '500' }}>
                  <p className="card-title">Fitness & Lifestyle</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://marie-emmanuelle2023.github.io/Lifestyle/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-md btn-outline-primary">Visiter le site</button>
                      </a>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className='card-img-top' width="100%" height="225" src='images/ifran.PNG'></img>
                <div className="card-body" style={{ color: '#1a2c51', fontWeight: '500' }}>
                  <p className="card-title">IFRAN</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://marie-emmanuelle2023.github.io/Ifran_flexbox/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-md btn-outline-primary">Visiter le site</button>
                      </a>


                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
          {/* Bouton de téléchargement du CV */}
          <div style={{ margin: 'auto', marginTop: '15px' }}>
            <button onClick={this.handleDownload} style={{ borderRadius: '7px', height: '50px', width: '200px' }}>
              Télécharger mon CV
            </button>
          </div>
        </div>
        {/* Fin de la présentation de mes projets */}

        {/* Formulaire de contact */}

        <div className='espaceform'>

          <h1 style={{ translate: '0px 175px', color: '#f0f7fe' }}>Contactez-moi</h1>
          <div className='form' >
            <form action="">

              <label htmlFor="nom">Nom</label>
              <div>
                <input type="text" name="nom" id="" />
              </div>

              <label htmlFor="prenom">Prénoms</label>
              <div>
                <input type="text" name="prenom" id="" />
              </div>

              <label htmlFor="email">Email</label>
              <div>
                <input type="email" name="email" id="" />
              </div>

              <label htmlFor="text">Votre Message</label>
              <div>
                <textarea name="text" id="" cols="25" rows="5"></textarea>
              </div>

              <input type="submit" value="Envoyer" style={{ height: '32px', width: '80px', color: '#fff', background: 'none' }} />

            </form>

            <img src="images/giphy.gif" style={{ width: '150px', translate: '190px 40px', border: '20px 20px 20px 20px' }} alt="" />
          </div>

        </div>


        {/* Formulaire */}

        {/* Footer */}
        <Footer />
        {/* Footer */}

      </>
    )
  }
}
