import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const handleArrowClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className="container-fluid"
      style={{
        width: '100%',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
        marginTop: '20px',
        clearfix: 'both',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Responsive Container */}
      <div style={{
        padding: '3px',
        maxWidth: '100%',
        margin: '0 auto'
      }}>

        {/* About Section */}
        <div style={{
          marginBottom: '24px',
          padding: '16px 0'
        }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                fontWeight: '500',
                color: '#202124',
                margin: '0',
                lineHeight: '1.2'
              }}
            >
              About this game
            </h2>
            <FaArrowRight
              style={{
                cursor: 'pointer',
                color: '#6c757d',
                fontSize: '16px',
                flexShrink: 0
              }}
              onClick={handleArrowClick}
            />
          </div>

          <div 
           className="para" style={{
            marginBottom: '20px'
          }}>
            <p style={{
              margin: '0 0 12px 0',
              padding: '0',
              color: '#5f6368',
              fontSize: 'clamp(0.875rem, 2vw, 0.875rem);',
              lineHeight: '1.5',
              wordBreak: 'break-word'
            }}>
              India's first leading real money making Aviator game where you can
              start earning instantly and withdraw profit directly to your Bank
              account using UPI. You can <br /> change your destiny using this app.
            </p>
            {/* <p className="para" style={{
              margin: '0 0 12px 0',
              padding: '0',
              color: '#555',
              fontSize: 'clamp(0.875rem, 2vw, 0.875rem)',
              lineHeight: '1.5',
              wordBreak: 'break-word'
            }}>
            </p> */}
         <span className="res">
         <p style={{
           margin: '0',
           padding: '0',
           color: '#5f6368',
           fontSize: 'clamp(0.875rem, 2vw, 0.875rem)',
           lineHeight: '1.5',
           wordBreak: 'break-word'
          }}>
              Supported payment Apps are PhonePe, Gpay, Paytm, all other UPI Apps etc.
            </p>
              </span>
          </div>

          <div style={{
            marginTop: '24px',
            marginBottom: '32px'
          }}>
            <p style={{
              margin: '0 0 4px 0',
              padding: '0',
              color: '#000',
              fontWeight: 'normal',
              fontSize: 'clamp(0.875rem, 2vw, 0.875rem)'
            }}>
              Updated on
            </p>
            <p style={{
              margin: '0',
              padding: '0',
              color: '#555',
              fontSize: 'clamp(0.875rem, 2vw, 0.875rem)'
            }}>
              July 19, 2025
            </p>
          </div>
        </div>

        {/* Data Safety Section */}
        <div style={{
          marginTop: '32px',
          marginBottom: '32px'
        }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                fontWeight: '500',
                color: '#202124',
                margin: '0',
                lineHeight: '1.2'
              }}
            >
              Data safety
            </h2>
            <FaArrowRight
              style={{
                cursor: 'pointer',
                color: '#6c757d',
                fontSize: '16px',
                flexShrink: 0
              }}
            />
          </div>

          <div style={{
            paddingBottom: '8px'
          }}>
            <p style={{
              margin: '0',
              padding: '0',
              color: '#5f6368',
              fontSize: 'clamp(0.875rem, 2vw, 0.875rem)',
              lineHeight: '1.5',
              wordBreak: 'break-word'
            }}>
              In this section, developers can specify how applications collect and use data.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            backgroundColor: '#ffffff',
            marginTop: '16px',
            marginBottom: '10px'
          }}>

            {/* Safety Item 1 */}
            <div
              className="d-flex"
              style={{
                alignItems: 'flex-start',
                gap: '15px',
                flexWrap: 'wrap'
              }}
            >
              <IoShareSocialOutline
                style={{
                  color: '#5f6368',
                  fontSize: 'clamp(18px, 3vw, 20px)',
                  marginTop: '3px',
                  flexShrink: 0
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontWeight: '400',
                  marginBottom: '4px',
                  color: '#5f6368',
                  margin: '0 0 4px 0',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                }}>
                  No data shared with third parties
                </p>
                <p style={{
                  padding: '0',
                  margin: '0',
                  color: '#5f6368',
                  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                  lineHeight: '1.4',
                  wordBreak: 'break-word'
                }}>
                  <span style={{
                    textDecoration: "underline",
                    padding: '0px',
                    margin: '0px'
                  }}>
                    Learn more
                  </span> about how developers declare sharing
                </p>
              </div>
            </div>

            {/* Safety Item 2 */}
            <div
              className="d-flex"
              style={{
                alignItems: 'flex-start',
                gap: '15px',
                flexWrap: 'wrap'
              }}
            >
              <AiOutlineCloudUpload
                style={{
                  color: '#5f6368',
                  fontSize: 'clamp(18px, 3vw, 20px)',
                  marginTop: '3px',
                  flexShrink: 0
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontWeight: '400',
                  marginBottom: '4px',
                  color: '#5f6368',
                  margin: '0 0 4px 0',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                }}>
                  No data collected
                </p>
                <p style={{
                  padding: '0',
                  margin: '0',
                  color: '#555',
                  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                  lineHeight: '1.4',
                  wordBreak: 'break-word'
                }}>
                  <span style={{
                    textDecoration: "underline",
                    padding: '0px',
                    margin: '0px'
                  }}>
                    Learn more
                  </span> about how developers declare collection
                </p>
              </div>
            </div>

            <p style={{
              fontWeight: '500',
              color: '#01875f',
              textDecoration: 'none',
              marginLeft: 'clamp(6px, 1.5vw, 12px)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              margin: '8px 0 0 clamp(12px, 3vw, 24px)',
              cursor: 'pointer'
            }}>
              See details
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          overflow: 'hidden',
          padding: '16px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '650px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: 'clamp(16px, 4vw, 24px)',
            boxShadow: '0 5px 25px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            margin: '16px'
          }}>

            {/* Modal Header */}
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div className="d-flex align-items-center" style={{ flex: 1, minWidth: 0 }}>
                <img
                  src="./images/logo.webp"
                  alt="logo"
                  style={{
                    width: 'clamp(48px, 10vw, 72px)',
                    height: 'clamp(48px, 10vw, 72px)',
                    flexShrink: 0
                  }}
                />
                <div style={{ marginLeft: '12px', minWidth: 0 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                    fontWeight: '600',
                    margin: '0',
                    wordBreak: 'break-word'
                  }}>
                    Aviator Game
                  </h2>
                  <p style={{
                    margin: '0',
                    color: '#666',
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                  }}>
                    About this game
                  </p>
                </div>
              </div>

              <span
                onClick={handleClose}
                style={{
                  fontSize: 'clamp(20px, 4vw, 24px)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  flexShrink: 0
                }}
              >
                ×
              </span>
            </div>

            {/* Modal Body */}
            <div style={{
              overflowY: 'auto',
              flex: 1
            }}>
              <div>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                  marginBottom: '16px',
                  wordBreak: 'break-word'
                }}>
                  India's first leading real money making Aviator game where you can start earning instantly and withdraw
                  profit directly to your Bank account using UPI. You can
                </p>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                  marginBottom: '16px',
                  wordBreak: 'break-word'
                }}>
                  change your destiny using this app.
                </p>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                  margin: '0',
                  wordBreak: 'break-word'
                }}>
                  Supported payment Apps are PhonePe, Gpay, Paytm, all other UPI Apps etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}