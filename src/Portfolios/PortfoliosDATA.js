// EVRE Portfolio 

import homepage from '../assets/evreAssets/homepage.svg'
import solutionpage from '../assets/evreAssets/solutionpage.svg'
import become_a_dealer from '../assets/evreAssets/becomeadealer.svg'
import enquiry from '../assets/evreAssets/enquiry.png'

export const wireframes = [
    {
        head: "Low Fidelity wireframes",
        para: "Magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Homepage",
        image: homepage
    },
    {
        title: "Product Page",
        image: homepage,

    },
    {
        title: "Charge with EVRE",
        image: homepage
    },
    {
        subImagesLeft: [
            {
                title: "Solutions Page",
                image: solutionpage
            },
            {
                title: "EVRE mobile app",
                image: solutionpage
            },
            {
                title: "Enquiry",
                image: enquiry
            },
        ]
    },
    {
        subImagesRight: [
            {
                title: "Product Detail Page",
                image: homepage
            },
            {
                title: "Product Detail Page",
                image: become_a_dealer
            },
        ]
    }


]