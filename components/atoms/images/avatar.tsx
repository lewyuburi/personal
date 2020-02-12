import Avatar from '@material-ui/core/Avatar'

interface Props {
  src: any
}

const AvatarImage = (props: Props) => {
  return (<Avatar src={props.src} />)
}

export default AvatarImage