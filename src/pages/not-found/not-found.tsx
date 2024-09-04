function NotFound(): JSX.Element {
  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"></source>
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""></img>
        </picture>
      </div>
      <div className="container">
        <h1>404 Page not found</h1>
      </div>
    </main>
  );
}

export default NotFound;
