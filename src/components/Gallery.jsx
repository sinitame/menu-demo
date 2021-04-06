import React from 'react'

export const Gallery = ({data}) => {
  return (
      <div id='menus' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Menus</h2>
            <p>
              Ils nous ont fait confiance, et nous les
              remercions! <span role="img" aria-label="Thanks">🙏🏾🎉</span>
            </p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              {
                data.map(client => (
                    <div className='col-sm-6 col-md-4 col-lg-4'>
                      <div className='portfolio-item'>
                        <div className='hover-bg'>
                          {' '}
                          <a
                              href={client.path}
                              title={client.name}
                              data-lightbox-gallery='gallery1'
                          >
                            <div className='hover-text'>
                              <h4>{client.name}</h4>
                            </div>
                            <img
                                src={client.preview}
                                className='img-responsive'
                                alt='Project Title'
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>)
}
