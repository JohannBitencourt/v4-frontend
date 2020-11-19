import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string

      warning: string
      success: string

      background: string

      buttonText: string

      cardTitle: string
      cardDescription: string
      cardTags: string

      backgroundCard: string

      text: string
    }
  }
}
