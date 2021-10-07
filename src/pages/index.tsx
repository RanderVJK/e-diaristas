import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={
          'Preencha o seu endereço e veja todos os profissionais da sua localidade.'
        } 
      />

      <UserInformation 
        name={'Vander Kempf'}
        picture={'https://github.com/RanderVJK.png'}
        rating={3}
        description={'Caxias do Sul'}
      />
    </div>
  );
}

export default Home;
