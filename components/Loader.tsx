import { Dna } from 'react-loader-spinner'
import { LoaderContainer } from '../styles/loader'

export default function Loader() {
  return (
    <LoaderContainer>
      <Dna
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderContainer>
  )
}
