import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


test('NavigationBar renders without errors', () => {
  const { getByText, getByAltText } = render(
    <Router>
      <NavigationBar />
    </Router>
  );


  // Check if navigation links are present
  const aboutLink = getByText('About');
  const sponsorshipLink = getByText('Sponsorship');
  const schoolProgramsLink = getByText('School Programs');
  const fixtureLink = getByText('Fixture');
  const trainingLink = getByText('Training');
  const feesLink = getByText('Fees');
  const contactUsLink = getByText('Contact Us');
  const joinLink = getByText('Join');

  expect(aboutLink).toBeInTheDocument();
  expect(sponsorshipLink).toBeInTheDocument();
  expect(schoolProgramsLink).toBeInTheDocument();
  expect(fixtureLink).toBeInTheDocument();
  expect(trainingLink).toBeInTheDocument();
  expect(feesLink).toBeInTheDocument();
  expect(contactUsLink).toBeInTheDocument();
  expect(joinLink).toBeInTheDocument();
});





test('renders social icons in Footer', () => {
  render(<Footer />);

  const instagramIcon = screen.getByAltText('Instagram');
  const facebookIcon = screen.getByAltText('Facebook');

  expect(instagramIcon).toBeInTheDocument();
  expect(facebookIcon).toBeInTheDocument();
});

test('renders Terms and Conditions link', () => {
  render(<Footer />);

  const tcLink = screen.getByText('Terms and Conditions');

  expect(tcLink).toBeInTheDocument();
});

test('renders copyright text', () => {
  render(<Footer />);

  const copyrightText = screen.getByText(/FutureSport | Football is Life 2023/);

  expect(copyrightText).toBeInTheDocument();
});



test('renders Header component correctly', () => {
  const { getByText, getByTestId } = render(<Header />);


  const heroTitle = getByText('Start Playing Football Today!');
  const ctaText = getByText('Join FutureSport and become a part of the Soccer community.');
  const joinBtn = getByText('Join!');


  expect(heroTitle).toBeInTheDocument();
  expect(ctaText).toBeInTheDocument();
  expect(joinBtn).toBeInTheDocument();

});
