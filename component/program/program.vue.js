var program = { 
	template: `
  <section class="p-5">
    <div class="container">
      <p class="conf-title">Program</p>

      <div class="row">
        <img src="./assets/aiotsys_banner.png" alt="" class="img-fluid p-0" />
        <table
          class="table table-bordered text-center align-middle table-hover"
        >
          <tbody>
            <tr>
              <td colspan="6" class="table-primary">
                2023年10月19日（星期四）
              </td>
            </tr>
            <tr>
              <td colspan="6">会议注册</td>
            </tr>
            <tr>
              <td colspan="6" class="table-primary">
                2023年10月20日（星期五）
              </td>
            </tr>
            <tr>
              <td colspan="6">
                智能物联网发展及其教育创新高端论坛（IDEA联盟）
              </td>
            </tr>
            <tr class="table-active">
              <td>地点</td>
              <td>时间</td>
              <td colspan="3">主题与嘉宾</td>
              <td>主持人</td>
            </tr>
            <tr>
              <td rowspan="8">会议室1</td>
              <td rowspan="2">9:00-9:30</td>
              <td colspan="3">领导致辞、主办方致辞</td>
              <td rowspan="4">郭斌</td>
            </tr>
            <tr>
              <td colspan="3">合影</td>
            </tr>
            <tr>
              <td rowspan="2">9:30-10:00</td>
              <td colspan="3">主旨报告1</td>
            </tr>
            <tr>
              <td colspan="3">熊辉 人工智能与未来创新</td>
            </tr>
            <tr>
              <td rowspan="2">10:00-10:30</td>
              <td colspan="3">主旨报告2</td>
              <td rowspan="2">王柱</td>
            </tr>
            <tr>
              <td colspan="3">黄民烈 大模型时代下的人机交互</td>
            </tr>
            <tr>
              <td rowspan="2">10:30-12:00</td>
              <td colspan="4">PANEL：智能时代的物联网发展</td>
            </tr>
            <tr>
              <td colspan="3">
                嘉宾：熊辉、贾维嘉、周兴社、稽智原、於志文、贺诗波、许辰人
              </td>
              <td>郭斌</td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>12:00-13:30</td>
              <td colspan="4">午餐</td>
            </tr>
            <tr>
              <td rowspan="8">会议室1</td>
              <td rowspan="2">13:30-14:40</td>
              <td colspan="4">面向领域的智能物联技术专题</td>
            </tr>
            <tr>
              <td colspan="4">主席：刘云新</td>
            </tr>
            <tr>
              <td>13:30-13:40</td>
              <td colspan="3">何强，华中科技大学</td>
              <td rowspan="6">刘云新</td>
            </tr>
            <tr>
              <td>13:40-13:50</td>
              <td colspan="3">刘云新，清华大学</td>
            </tr>
            <tr>
              <td>13:50-14:00</td>
              <td colspan="3">姚雯，军事科学院</td>
            </tr>
            <tr>
              <td>14:00-14:10</td>
              <td colspan="3">王烽，华为云</td>
            </tr>
            <tr>
              <td>14:10-14:20</td>
              <td colspan="3">邓立，网易</td>
            </tr>
            <tr>
              <td>14:20-14:40</td>
              <td colspan="3">
                PANEL研讨主题：新时代领域痛点与智能物联网赋能关键技术
              </td>
            </tr>
            <tr>
              <td rowspan="8">会议室1</td>
              <td rowspan="2">14:40-15:50</td>
              <td colspan="4">智能物联网人才培养专题</td>
            </tr>
            <tr>
              <td colspan="4">主席：谢磊、李瑞</td>
            </tr>
            <tr>
              <td>14:40-14:50</td>
              <td colspan="3">罗娟，湖南大学</td>
              <td rowspan="5">谢磊</td>
            </tr>
            <tr>
              <td>14:50-15:00</td>
              <td colspan="3">谢磊，南京大学</td>
            </tr>
            <tr>
              <td>15:00-15:10</td>
              <td colspan="3">鲁力，电子科技大学</td>
            </tr>
            <tr>
              <td>15:10-15:20</td>
              <td colspan="3">蒋志平，西安电子科技大学，PICOSENCES实验平台</td>
            </tr>
            <tr>
              <td>15:20-15:30</td>
              <td colspan="3">
                刘思聪，西北工业大学，智能物联网教学资源及太易实验平台
              </td>
            </tr>
            <tr>
              <td>15:30-15:50</td>
              <td colspan="3">
                PANEL研讨主题：如何将科学前沿成果有机融入人才培养全过程
              </td>
              <td>李瑞</td>
            </tr>
            <tr>
              <td rowspan="8">会议室1</td>
              <td rowspan="2">15:50-17:10</td>
              <td colspan="4">IDEA TALK 青年秀</td>
            </tr>
            <tr>
              <td colspan="4">主席：刘思聪、陈龙彪</td>
            </tr>
            <tr>
              <td>15:50-16:00</td>
              <td colspan="3">陈超，重庆大学</td>
              <td rowspan="2">刘思聪</td>
            </tr>
            <tr>
              <td>16:00-16:10</td>
              <td colspan="3">郑臻哲，上海交通大学</td>
            </tr>
            <tr>
              <td>16:10-16:20</td>
              <td colspan="3">李东博，哈尔滨工业大学</td>
              <td rowspan="3">陈龙彪</td>
            </tr>
            <tr>
              <td>16:20-16:30</td>
              <td colspan="3">魏星达，上海交通大学</td>
            </tr>
            <tr>
              <td>16:30-16:40</td>
              <td colspan="3">姚远，西北工业大学</td>
            </tr>
            <tr>
              <td>16:40-17:10</td>
              <td colspan="3">PANEL研讨主题：青年人如何用科学家精神破卷出圈</td>
              <td>刘思聪</td>
            </tr>
            <tr class="table-primary">
              <td colspan="6">2023年10月21日（星期六）</td>
            </tr>
            <tr class="table-secondary">
              <td>地点</td>
              <td>时间</td>
              <td>主题</td>
              <td>嘉宾</td>
              <td>单位及任职</td>
              <td>主持人</td>
            </tr>
            <tr>
              <td>会议室1</td>
              <td>08:30-09:00</td>
              <td colspan="4">开幕致辞、合影</td>
            </tr>
            <tr>
              <td></td>
              <td>09:00-09:40</td>
              <td>
                Fellow Keynote: Machine Learning in Digital Twin Edge Networks
              </td>
              <td>张彦</td>
              <td>
                IEEE Fellow, Member of the Academia Europaea and Norwegian
                Academy of Technological Sciences, Full Professor at University
                of Oslo, Norway
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>09:50-10:30</td>
              <td></td>
              <td>张大庆</td>
              <td>
                IEEE Fellow, Member of Academia Europaea, Chair Professor at
                Peking University, China and Telecom SudParis, IP Paris, France
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>10:40-12:00</td>
              <td>
                Panel Discussion: Digital Twins and Intelligent IoT for our
                better future world
              </td>
              <td colspan="2">
                Panelist: Chris(UK)、杨鲲(University of Essex,
                UK)、Sekimoto(东京大学)、 张大庆(北大)、 杜博文(北航)、
                贾维嘉、张彦（待确认）、於志文
              </td>
              <td>Prof. Runhe Huang (Professor, Hosei University)</td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>12:00-13:30</td>
              <td colspan="4">午餐</td>
            </tr>
            <tr>
              <td rowspan="5">会议室1</td>
              <td rowspan="5">13:30-15:30</td>
              <td colspan="4">分论坛主题：CAA Special Track</td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：贺诗波、顾超杰</td>
            </tr>
            <tr>
              <td>工业物联网智能感知与可信计算</td>
              <td>惠维</td>
              <td>Xi'an Jiaotong University, Associate Professor</td>
              <td rowspan="2">贺诗波</td>
            </tr>
            <tr>
              <td>A Tale of Connecting Massive Things to a Cyber World</td>
              <td>夏先进</td>
              <td>
                The Hong Kong Polytechnic University, Research Assistant
                Professor
              </td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session1"
                  >Session 1 long paper oral presentation</a
                >
              </td>
              <td>顾超杰</td>
            </tr>
            <tr>
              <td rowspan="5">会议室2</td>
              <td rowspan="5">13:30-15:30</td>
              <td colspan="4">
                分论坛主题：Artificial Intelligence for the Industrial Internet
                of Things (AIIoT)
              </td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：崔禾磊、黄兴</td>
            </tr>
            <tr>
              <td>高效安全的工业物联网数据智能</td>
              <td>张兰</td>
              <td>中国科学技术大学教授</td>
              <td rowspan="2">崔禾磊</td>
            </tr>
            <tr>
              <td>
                Research on Serverless-driven Edge Intelligence for Video
                Streaming
              </td>
              <td>杨松</td>
              <td>北京理工大学长聘副教授</td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session2"
                  >Session 2 long paper oral presentation</a
                >
              </td>
              <td>黄兴</td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>15:30-16:00</td>
              <td colspan="4">茶歇</td>
            </tr>
            <tr>
              <td rowspan="6">会议室1</td>
              <td rowspan="6">16:00-18:00</td>
              <td colspan="4">
                分论坛主题：Ubiquitous Computing Special Track
              </td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：刘璇、刘佳</td>
            </tr>
            <tr>
              <td>Exploring new opportunities for wireless sensing</td>
              <td>张扶桑</td>
              <td>中国科学院软件研究所 副研究员</td>
              <td rowspan="2">刘璇</td>
            </tr>
            <tr>
              <td>Robust Passive Sensing with RFID</td>
              <td>刘佳</td>
              <td>南京大学计算机学院副教授</td>
            </tr>
            <tr>
              <td>Edge Intelligence System in LLM Era</td>
              <td>徐梦炜</td>
              <td>北京邮电大学计算机学院特聘副研究员</td>
              <td rowspan="2">刘佳</td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session3"
                  >Session 3 long paper oral presentation</a
                >
              </td>
            </tr>
            <tr>
              <td rowspan="6">会议室2</td>
              <td rowspan="6">16:00-18:00</td>
              <td colspan="4">
                分论坛主题：Integrated Sensing, Communication, and Computation
                (ISCC) for AIoT: Technologies, Emerging Trends and Challenges
              </td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：杨博、孙卓</td>
            </tr>
            <tr>
              <td>
                Novel hybrid precoding and beam scanning theory and methods for
                5.5G/6G
              </td>
              <td>黄崇文</td>
              <td>浙江大学，教授、博士生导师、信息与通信工程系-系主任</td>
              <td rowspan="2">杨博</td>
            </tr>
            <tr>
              <td>Sensing-in-the-loop Transmission &amp; Networking for IoT</td>
              <td>郑霄龙</td>
              <td>北京邮电大学，副教授、博士生导师</td>
            </tr>
            <tr>
              <td>
                Human Activity Recognition and Digital Twins: The past, the
                present and the future
              </td>
              <td>Christopher Nugent</td>
              <td>Professor, Ulster University</td>
              <td rowspan="3">孙卓</td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session4"
                  >Session 4 long paper oral presentation</a
                >
              </td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>18:30-20:30</td>
              <td colspan="4">晚餐</td>
            </tr>
            <tr class="table-primary">
              <td colspan="6">2023年10月22日（星期日）</td>
            </tr>
            <tr class="table-secondary">
              <td>地点</td>
              <td>时间</td>
              <td>主题</td>
              <td>嘉宾</td>
              <td>单位及任职</td>
              <td>主持人</td>
            </tr>
            <tr>
              <td rowspan="3">会议室1</td>
              <td>09:00-09:40</td>
              <td>
                Fellow Keynote: Stacked Intelligent Metasurfaces Enabled Joint
                Computing and Communication in the Wave Domain
              </td>
              <td>Chau Yuen</td>
              <td>
                IEEE/AAIA Fellow, Associate Professorat Nanyang Technological
                University,Singapore
              </td>
              <td></td>
            </tr>
            <tr>
              <td>09:50-10:30</td>
              <td>AIoT Empowered Low-Carbon Industrial Power Sector</td>
              <td>陈积明</td>
              <td>IEEE Fellow, Chair Professor, Zhejiang University, China</td>
              <td></td>
            </tr>
            <tr>
              <td>10:40-12:00</td>
              <td>
                Panel Discussion: Intelligence computing for emergent
                human-machine ecosystem
              </td>
              <td colspan="2">Panelist: 杨天若、Chau Yuen、熊辉、谢幸、郭斌</td>
              <td>Prof. Liming Chen (Professor, Ulster University (UU))</td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>12:00-13:30</td>
              <td colspan="4">午餐</td>
            </tr>
            <tr>
              <td rowspan="6">会议室1</td>
              <td rowspan="6">13:30-15:30</td>
              <td colspan="4">分论坛主题：AIoT Security</td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：孙文、张引</td>
            </tr>
            <tr>
              <td>Advances and Challenges in Blockchain Security Research</td>
              <td>付章杰</td>
              <td>南京信息工程大学，网络安全学院院长，国家级青年人才</td>
              <td rowspan="2">孙文</td>
            </tr>
            <tr>
              <td>
                Data Element Circulation and Governance for the Linkage of
                Hospitals, Medical Insurances and Medicine Systems
              </td>
              <td>孔令和</td>
              <td>上海交通大学，国家级青年人才</td>
            </tr>
            <tr>
              <td>Blockchain-based Distributed Digital Identity</td>
              <td>盖珂珂</td>
              <td>北京理工大学，国家级青年人才</td>
              <td rowspan="2">张引</td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session5"
                  >Session 5 long paper oral presentation</a
                >
              </td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td>15:30-16:00</td>
              <td colspan="4">茶歇</td>
            </tr>
            <tr>
              <td rowspan="6">会议室1</td>
              <td rowspan="6">16:00-18:00</td>
              <td colspan="4">
                分论坛主题：Artificial Intelligence and Edge Computing (AIEC)
                for IoT
              </td>
            </tr>
            <tr>
              <td colspan="4">分论坛主席：周欢</td>
            </tr>
            <tr>
              <td>
                The Wisdom of 1170 Teams: Lessons and Experiences from Large
                Indoor Localization Competition
              </td>
              <td>舒元超</td>
              <td>浙江大学教授</td>
              <td rowspan="4">周欢</td>
            </tr>
            <tr>
              <td>
                Structurally Adaptive Edge-Cloud Collaborative Model Training
              </td>
              <td>任炬</td>
              <td>清华大学副教授</td>
            </tr>
            <tr>
              <td>
                Key Technologies and Applications of Air Ground Collaborative
                Mobile Group Sensing Network
              </td>
              <td>刘驰</td>
              <td>北京理工大学教授</td>
            </tr>
            <tr>
              <td colspan="3" class="table-info">
                <a href="index.html#/session6"
                  >Session 6 long paper oral presentation</a
                >
              </td>
            </tr>
            <tr>
              <td>会议室2</td>
              <td>13:30-18:00</td>
              <td colspan="4">
                <a href="index.html#/report">大会报告</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  `
};