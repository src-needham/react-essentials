import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
      </nav>
    </div>
  );
}

export function Whoops404() {
  return (
    <div>
      <h1>This page does not exist.</h1>
    </div>
  );
}