import React from 'react'
import App, {Container} from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore from '../stores'

import '../sass/global.scss'; 



Router.events.on('routeChangeStart', (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render () {
        const {
          Component, 
          pageProps,
          store
        } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(makeStore)(MyApp);