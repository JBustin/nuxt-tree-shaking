import { foo } from '~/common/shared-lib'

export default () => {
    foo()
    // eslint-disable-next-line no-console
    console.log('module:a')
}