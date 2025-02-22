---
date: 2020-07-21
slug: '/4836FE'
---

## Q. 아까 코드를 잠깐 보니 리액트와 [[Styled Components|스타일드 컴포넌트]]를 사용하시는 것 같은데, 리액트를 메인스트림으로 사용하시나요?

[[Front-end|프론트엔드]]에는 리액트와 [[TypeScript|타입스크립트]]를 쓰고 있다. 하지만 권장 사항일 뿐이다. 제품과 부서에 따라 뷰를 사용하는 경우도 있고 리액트와 JS를 함께 쓰는 경우도 있고 바닐라 자바스크립트를 사용하기도 한다. 적정 기술이 언제나 최우선이다.

## Q. 신기술을 공부하는 특별한 방법이 있나요? 또 신기술에 대해 어느 정도 신뢰도가 생겼을 때 실무에 적용해 보시나요?

이것이야말로 케이스 바이 케이스다. 물론 공부를 떠나 제품에 신기술을 적용하는 것은 또 다른 문제다. 안정성을 비롯하여 수많은 허들이 있다. **적정 기술**인지도 고민해야 한다. 그 실무가 얼마나 **미션 크리티컬**한지에 따라 달라질 것이다.

예를 들어 내부의 일부 사람들만 쓰는 도구이고 몇 시간 동안 서비스가 다운되어도 큰 문제가 발생하지 않는 서비스라면, 조금 무리해서 신기술에 대한 터치를 해 볼 수 있을 것이다. 하지만 잠깐이라도 서비스가 다운되어도 치명적인 손해가 발생하는 서비스는 안정성을 우선으로 할 것이다. 접점 유저들이 많아질수록 100% 커버리지를 보장할 수 없다. 이런 중요한 서비스에 새로운 기술을 사용해야 한다면 1% 유저들에게만 새로운 기술을 노출시켜보고, 점차 대상 유저를 확대하는 방식으로 기술을 적용할 것 같다.

## Q. [[Front-end|프론트엔드]]의 테스트 방법이 궁금합니다.

기본적으로는 유닛 테스트와 [[E2E testing|e2e 테스트]]([[E2E testing|end-to-end test]])가 있다. 하지만 여러 이유로 못하는 팀도 있다. 물론 [[E2E testing|e2e 테스트]]는 중요하다. 복잡도가 올라간 [[Project|프로젝트]]가 너무 많기에, QA (Quality Assurance, 품질 관리) 팀 같은 경우에는 [[E2E testing|e2e 테스트]]를 진행한다.

현재는 공통 테스트 솔루션을 연구해보고 있다. 자바스크립트 테스팅 환경으로 앱도, 웹도, 앱 속의 웹뷰도 테스트하기 위한 방법을 찾아보고 있다.

## Q. [[Front-end|프론트엔드]] 개발자가 [[UIUX|UI]]나 [[UIUX|UX]]에 대한 아이디어가 있다면 이를 반영할 수 있나요?

제안은 당연히 가능하다. 하지만 적용할 수 있는지는 마찬가지로 케바케. 제품이 시장에 나가야 하는 시점 같은 것도 프로덕트 매니저 분들이 고민해야 하기 때문이다. 구성원들끼리 모두 합의가 이루어지면 당연히 적용할 수 있을 것이다.

하지만 본인의 제안이 남들을 설득시키지 못하고 본인만 좋다고 생각한다면 2가지 방법이 있다. 포기하거나 증명하거나.

요즘 개발 팀 중에서 개발자가 제안하기 힘든 조직은 없는 것 같다.

## Q. 퍼블리셔라는 직군이 있는 회사도 있습니다. 우아한형제들은 어떤가요?

우아한형제들에는 퍼블리셔가 없다. 예전에는 있었는데 현재는 없으며 채용 계획도 없다. 퍼블리셔는 갑론을박이 조금 있는 주제이다. 웹에 대한 관점의 차이 때문이다.

우아한형제들은 웹을 **공공의 문서**라고 보기보다는 **애플리케이션**의 관점에서 바라보고 있다. 그래서 퍼블리셔가 아닌 [[Front-end|프론트엔드]] 개발자가 있는 것이다. 또 [[Front-end|프론트엔드]]에서 컴포넌트 개발을 하는 등 **재사용성**에 집중하는 것이다. 예를 들어 [[CSS]]는 큰 [[Project|프로젝트]]에서 깨지기가 너무 쉽다. 즉 **퍼블리셔**는 기술을 터치하는 맥락에서 다른 접근 방향을 가지는 것이다.

만약 퍼블리셔가 우아한형제들에 합류한다고 해도 배민에서 일하기는 굉장히 어려울 것이다. 아마도 일하는 방식이 맞지 않을 것이다.

## Q. (연장) 새로운 기술을 받아들이기로 하면 그 기술을 어떻게 적용하나요?

배민은 5년 전까지만 해도 PHP를 주로 사용했다. 전부 [[Server-side Rendering|서버 사이드 렌더링]]이었다. 그때는 이것이 당연했다. [[Back-end|백엔드]]는 자바를 사용했다. 이후 마이크로 서비스 아키텍처가 나을 것이라고 판단하고 API 서버를 제작하기 시작했다. 즉, 이전에는 php로 렌더링 하는 [[html]] 문서뿐이었던 웹이 한순간에 또 다른 클라이언트가 된 것이다. 이때까지만 해도 우아한 형제들에는 웹 퍼블리셔만 있었고 [[Front-end|프론트엔드]] 개발자가 없었다.

이런 기술적 과도기를 극복하기 위해 **우아한JS**라는 것을 만들었다. 퍼블리셔가 웹 개발자로 소프트랜딩 할 수 있도록 돕는 프레임워크였다. 이 덕분에 많은 퍼블리셔들이 웹 개발자로 1~2년 사이에 직군을 전환할 수 있었다. 기술 허들을 낮춘 것이다.

배달의 민족 내에는 우아한JS로 운영되는 다양한 [[Project|프로젝트]]가 있다. 여전히 우아한JS를 사용하는 [[Project|프로젝트]]도 있다. 그 후 2년간 주력 기술을 리액트와 [[TypeScript|타입스크립트]]로 전환했고, 이제는 이것이 기술 표준이 되었다.

**서비스에 사용하는 기술을 전환한다는 것은 달리는 차의 바퀴를 바꾸는 것이다**. 조금씩 바꾸며 괜찮은지 지속적으로 확인해야 한다. 또 팀에 있는 개발자의 수, 실력, 성향에 따라서 매우 다르다.

- [우아한, WoowahanJS - 우아한형제들 기술 블로그](https://woowabros.github.io/tools/2016/09/07/woowahan-js.html)
- [https://github.com/woowabros/WoowahanJS](https://github.com/woowabros/WoowahanJS)

## Q. [[Front-end|프론트엔드]] 엔지니어로 근무하면서 가장 일하기 좋았던 동료와 일하기 힘들었던 동료, 애로사항 같은 점은 무엇인가요?

좋았던 동료는 많다. 마치 맛있는 음식은 우열을 가릴 수 없이 전부 맛있는 음식인 것과 비슷하다.

나쁜 사람은 조금 케이스 바이 케이스이다. 예를 들어 7~8년 전에 기술력이 필요한 일이 있어 업계에서 출중한 분을 모신 적이 있는데, 여러 가지 기술적 도전을 하다 그분이 [[Project|프로젝트]]를 드롭한 것이 힘들었다. 처음에는 힘들었는데, 나중에는 스스로도 반성을 하게 되었다. 슈퍼 개발자가 있다면 슈퍼 코워커도 필요하다. 내가 슈퍼 매니저였는지, 아니면 놓친 것이 있는지 스스로 돌아보는 것이 중요한 것 같다.

## Q. 신입 ([[Front-end|프론트]]) 개발자에게 다양한 경험을 기대하시나요, 아니면 CS 지식이나 JS 기본기를 기대하시나요?

당연히 기본기다. 아까 이야기한 바와 같이 세상에는 변하는 것들이 워낙 많기 때문이다. 물론 변하지 않는 것들도 있다. 예를 들어 폰 노이만 구조는 바뀌지 않았다.

이런 맥락에서 처음 공부하는 사람이 **다양한 경험을 쌓을지** 아니면 **기본기를 쌓을지** 고민한다면 당연히 기본기를 먼저 추구해야 한다. 다양성은 취업하게 되면 자연스럽게 겪게 될 것이다.

물론 입사 경쟁이 치열하다는 것은 이해한다. 취업 준비생의 입장에서 **기본기를 추구했지만, 하다 보니 이런 다양성도 추구되었네?** 같은 자세도 필요한 것 같다.

## Q. 우아한형제들 근무 환경의 장단점은 무엇인가요?

우선 장점으로 자주 바뀐다는 점이 있다. 한 회사에 다닌 지 2년 정도가 넘어가면 회사와 제품 개발 프로세스에 익숙해진다. 새로운 [[Project|프로젝트]]를 도입해도 **이렇게 이렇게 하면 되겠네** 같은 것이 바로 떠오르는 정도가 된다. 그런 과정이 계속되면 스스로가 정체되는 것 같아 이직할 생각도 나게 된다. 하지만 배민은 변화가 매우 심하고, 장사도 잘 된다. 성장률이 여전히 J 커브를 그리고 있다. 그래서 배민은 지루할 틈이 없다. 대표와 이야기할 일도 많다.

단점 또한 마찬가지이다. 변화가 크고 빠르면 너무 힘들다. 휴가 한 번 다녀와도 다른 회사가 되어 있다. 또한 회사 초기에는 행사가 많았는데 요즘에는 행사가 조금 없어서 그립다.

## Q. 웹의 미래는 무엇이라고 생각하시나요? 웹 어셈블리라고 생각하시나요?

웹은 더 발전할 것이다. 다른 플랫폼 대비 낙후되어 있기 때문이다. 말씀하신 어셈블리도 다른 플랫폼에는 전부 존재하다가 이제서야 웹에서 실행할 수 있게 나온 것이다. 즉 웹은 대체 불가능할 정도로 유연한 기술이지만 또한 동시에 너무나도 낙후된 영역이다.

기술은 영원하지 않다. 각각의 기술들을 서로 비교했을 때 웹은 **최고**라 할 만한 것이 딱히 없다. 하지만 **유연성**에 있어서는 최고다. 가장 범용적으로 사용할 수 있는 기술이다.

또한 **제대로 된** [[Front-end|프론트엔드]] 개발자를 찾기가 너무 힘들다. 그러므로 웹과 웹 개발자의 미래는 밝다고 할 수 있다!
