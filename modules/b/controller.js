import { bar } from '~/common/shared-lib'

export default () => {
    bar()
    // eslint-disable-next-line no-console
    console.log('module:b')
}