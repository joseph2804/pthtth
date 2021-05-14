function Hiep() {
    return(
        <div>
        <input id="UID" name="UID" type="hidden" defaultValue={88} />
        <div id="focus-overlay" />
        <div className="wrapper">
          <style dangerouslySetInnerHTML={{__html: "\n\t\t\t@keyframes bellmove {\n\t\t\t\tfrom {\n\t\t\t\t\ttop: -8px;\n\t\t\t\t}\n\n\t\t\t\tto {\n\t\t\t\t\ttop: -5px;\n\t\t\t\t}\n\t\t\t}\n\t\t" }} />
          <header className="header">
            <div className="container">
              <div className="header-content">
                <div className="menu-btn">
                  
                </div>
                <div className="user-account dropdown">
                  <div className="user-info" data-toggle="dropdown">
                    <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACWAHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDweRjj6UwNknNK7Y7fnTM5H1r+qmz8KSGqxJYEYwfzpScDOfxpoHLEHk1HPcxw27vK6qqDLNnAHrUtpajV9iTzVDYzz0rE17xnpnh5GN1cKHH3Yk+Zz+FcL4o+LaqstrpUTluV+0Snge4H+NeY3F1LcuWlkZ2PdjnNfGZlxJRw/uYb3pd+i/zPocJlE6vvV/dXbqeszfGuzRyEsbhwO5ZRSJ8bbTY27T593bDrzXkJNJmvknxNmF/iX3I9pZRhF0f3s9n074yadcti5hmtmY4BOGUfiK6fS/F+nawWW1uo5JAM7Q3T8K+cSc0+GeSB90bsjeqnBrsw/FeJg7VoqS+5mFXJqMv4ba/E+oY7vzF6jPsCBUxnHAJwT0Br548PeOtR0JtvmNcwE5McjHj6HtXqvh3xhb67amaE4k4DI5BZD/h719rl2d4bMfdi+WXZ/ofP4vL6uEXM1ePc7ESnH+FBlxms9b75SR35G7t/9ap8kgZ6+1e9c89JPYtCbBxml83/AGqp+YS54BUcZHWnZovYfKmXWOTTQcZpc56VG5XJ9QO3XFNsz2Gl9hOfX8q8c+Ivjua8urjS7GQLZqdsjp/y0PcfSur+I3iSbQNIVLVWilusoH6hR3OfU14k7ZJJ718JxJmkqC+qUXZvd/ofS5Rg1U/2iovT/MRmJPWkzSUV+WuV9z64KKKKjoAUUoFJRewCgZqa0u57OdZbeR4pF5DIcGoKKuM3B80XZiaTVmer+DPG51YR29yyrdJ07bx7f4V3MM7FQ5kDHnjtj/GvnS2ne2njlQlXRgwIr3XQL4XdpazAYEkY/P8A/XX6zw/m08ZTdGrrKPXuj43M8DChJVKeif4M3op2JKOMEc5HSpfOT++n/fVU43kR2OQQeSuc4FS/bF/2q+zseFGaStJ29TWY8cdqjdztOODjipCN3FQyDaxIPA6j0oSJVjzr4yx/8SayODkzZJ99teQNXtHxetlk0CFwGLiYYAPU49K4HQvCEmsxfJG77jj5Rz/nivyDilqnjXKXZH6BktKVbDqMe7OTor0m6+F2oRQRusDoWzwwOT82BVLUvhhq1hHO8loxWJQSSp4GCTXwqxNJvc+neXVkrpHB0rLtOM5rSn0+S2QO0RVX4BYcHA6VA9hLIEKIdpHGAea6OdHLLDzivMqZweP1pKsGykDYxz0wc9avJ4euyqn7PK+4gDCn8qUqkY7kww9WbskZYQsTgFscnHpTa6j/AIQPV2hWY6bOUfkNsPNY2o6dPYSyQyxhGRiTkYP0+lRGtCbtFmlTCVaS5pIpxLulQEZBIGK910OCKG3SNARGqjaB/D0Ga8X0CwOo6zaQjoZATzjgcn9K970+DbCuMKxHfnFfpnCdJqNSo+rSPjc4fNyRXmydEDsVU5wv3s9frSfZX9V/OpbdXVnLc5OOR7VNn2FfpHNY+VVJTV5I0ajcck9/WpG7U1h6mqIRyHxKszdeGpXQHfEyycegPJ/WvQ/2Z/BC6poqahcIrIWKgFeuD1qGLwFrPi3w/fzadZG6tURkcqQWJx2XvivRf2UtPkX4fJDKpV1uJUII54YivxvjdUp1IuE03s0nqra6n6ZwopqMlKLtunbf0PRzpnhWyKJftCjKOQOSB710FlpfgLxFP5YvLR5JovKaN9oLCkvNH8NWluZdYmtrQZyXlYKR+deY+K9S+EUupxRReILUXuQAscnAb6joa/HJRSbaV/Q/UU20lex1fxD/AGXfCniXSdJttLhjWO3ut7shGShByM+mcVnp+yD4d0+4iMEK+RHGyBT2ywOfrxW74OL288Y07UGnhchuWyGFeqapdTW+js/LSbe3rWP1luNk9EbewUXqtTwEfsjeBNHgWfVriJCkxnLGQKAM7sHParcsPwp0dgsGqWDtFyAhDYNP8Z6bB4rikj1m7Mdsmd5ZtoArirO1+D+hXBgn160W6Hy7JXwAfyxUKsq6s7s0dJ0X0R3S3HhbVrXZpt1azA8bBgE18x/tJ/C9rKRNZ0+BRB0mCADHvX0PY6b4UvfLk0e6trlVOUaJlOPfisz4x6Ul58P9Y+TcVtmcflU4ao6NeLj3KxNNVaLjPsfGHw10ZZdXuZypIiQKCOmT/wDqr1eKMbCCOCMVlfDPwhc/8Io2pLEFilkY7mOCwHoO/wCFdB5W3I/lX9P8Nul9Riqck31s72fZ+Z/P2dKpDEvni0ntdWuu68hjRgHaDu9x0pPLPoKkRAgOM9SaXI9/yr65I8BSZaIzTW++Bz65xTyc0mMmtWcp7d+ztp6XdvPKsjCW2kk3YPADAGvR/hd4ZttJF5FAqrE91LMAowMs5avHf2edcisPEuo6bPMsC31v+7Zjj94pPH5V7/4RSWyvpYZojEwIYejA9x7V/PnF2FlRzOpLpNJ/gftPDOIjVy+EesdPxNDxF8I9E8W7ZNRsEutrB1354I71534q/Zd8Lap4hTW306X7ejK+fOIQsAADsHBPA7V9FWDq8O046VM1hGw3MMn0Nfn6nKCfI7H2iiptc6TPJvB3wxg8O2iLEjKDIXAJyRnqB7V2PiDTQNBIHDYwc1uyFPOwoHHaqficFNNVcABh+dcEo7s9CLu0eM3/AIPt9YtmguEcq0gc7Dgtt5APtmuJ8S/s4eHfF/iL+2bi1uvtpcO2yX92WAAB29Owr2XRp45NQeBhzjOK6u20qJPmVeT2rOhOdNPkdi60YVPjjc+d/Dn7OeneGL2S8s/tEBlbeyiT5Sc+lXPiDowXwtqFrjIkgdAPcivc9XVLeE9ORXkfjq4UskeGYs33VGSR9KHf2ik2Re8eVLQ8YtvDcFp4G094gpW0tmUgfwnbXn1wihc9MV6/4vP9g+EbiCVRBPeTZEIPKqeea8huGA4P1r974AozjgKlaX2pO3ySR+PcbVYyxtOlH7EV+LZWooyaTn2r9VufnaLbAHA7UAc9TSMSAcDNKSSfr6Vsc4sE89pcpNbytFPGQyOvVSOhr6W+GXxLt/FC2YeULqscWy5hwQODww9jXzIp+bOOldR8MNZOkeNdOfdsjmfyXJ7g9P1xXzOf5XTzHCSbXvRTaf6eh7+T4+eBxCafuysmfeOh3pkhByM1syzO6ZGTkda4fwteExAE5A711CarHGmSSAP1r+Zq8PZycT94oVOdJnOa544Tw9fLZ/2dc3VwRueWPbtQe+SM/hXN+Lfi1AtsoFvNLjgJGm5jXeXz2V45eZYmbGAXAzXL61pulCKT7SsKO5O0PgZ+ledN2Wh7FJqX2Wcvonimy8QanZy6fFJFKqnzY5l2ug/2h25r0pLxYowc44rkNBtNM0hZTbwxQBjyUAGavanrKKQintxisY2WppP3nZIj8Q6uqhvm6Z6968Z8T+IrG31TffXIt0wSCTzxXa65qBkDc8e9fOvxE1Vb3XJwhysI2fj1NfU8O5Os7xjoVG1BJttb+X4nzGeZo8owyrQScm0knsVfGniT+3dVlkjdvsqfLEp7D1+prlJHLnnkUsku/I7dajIxX9M4PCU8HRhQpK0YqyPwPEYipiqsq1V3lJ3YEZFJsFKevWjB9RXcYFykzk0EZFIcBCeMCtzmGkbWIGMY4FJG5jkV1JV0YMpHYg5Bp8UT3RHko0zdNsaliT+FbFj4C8SasF+yaBqM+7oRbMB+ZxWc5xivedvU0jr8Op9RfCLxtH4o8OW11kLMB5cyg9HHB/xrtNWE95bGO2maJj/GvUV5D8LPCqeB5pNLk3HWFiSe/BPCM2dsePVQOtet20xdBiv5n4hpYaGMqRw7vFM/d8jqV5YanKurOxw0vhjVZpyX8VyxlTystuGB/I1ka14P1MxSSN4ptdwyF3W7Zx6D5q9OvvDkmoxFoSY3P8QNYFz4DvArM9w0qj1NfFzf90/QKOJjGNpHl+laX4mt72ILrsU9spyyGAgt7ZzXbC4lEYaRiZOmKnl04aYuMEsKy7m4CAsTx/OuVLnl2Jq1E9UYvjTxHHo2lSysw8xhiNc8lq+er65aZ5JGbLuSST3NevePPDU3iTTrvUbZ2e508BpLQc/uT/GPoeteMXK7W9Pev6H4IweGpYD29KV5TfveVtl+p+EcW4qvVxvsaitGO3nfd/oQgZJozz60inLc0hO1s9a/SkfD2Hhgcc07C/3j+RqLo3Ye9OyvrTtcLH0r4Q/Yn8YaxLHLrN5ZaRa8F0jYzS474xgA/nXv3w//AGTPAuhuJZdKGq3Ef/LXUG83J9dv3R+Ar6CvXhMG6K3GT3JxWXp97BDIytC4YnoDxX5NiM8xuLi7y5V2Wh9rRynD0Grq78zH0/4aaDpqgW2k2lso4AiiVcflUGsaDbaXDc3vlqlvawtMQBgZA4Fdde6gwSNIoxGztjA61wH7R15c+H/gh4quLVj9rWzdUcdS23rXgPEVd5S3PZp0IOSikfHnwd1a48T+JfF+u3EvmNfai6oAchVTgD+devqWtCGQ4B65rw/9nPTn0jw+IZCxbdvJPcnk17mzLJGAe4r85xFd1Ksn5n6ZSoKnCMfIU+J5LaMAg8etUrnxi3lsBj8ajvrYbRj8jXO6jbnB9a4pzOqEEyLUdYNxLknOewrIuf3h3N+XpVlLUtIOfzpl5CUiLHoK45SeyOuMVuZ/w1lF78V723OHjXSzvQ9DmTvWh42/Zz07xDNNNpX/ABKLlediLmCX0OOqn1x+VZf7O9nPrHxP8V6jsJgit47dX7ZyTj8sV9MR2DC3VwM7GGfpX6jkFavg6EZUZWbPzfPaNHEV5RqRvY+BfGXwp8ReCWJ1LT3W2z8t3F88Lf8AAh0/HFcg8RU8iv0yudEiu4XjaJHR1w8ci7kYehBrxbx/+yno3iNJrnw/J/YuosS32ZstbyH0Hdfw/Kv1bB5/Cfu4lWfdbf8AAPzjE5TOPvUHfy6nxmUyfak8v3r0Lxd8D/F/g0SPfaLO0KHme2Hmx49eOfzFcf8A2DqP/Phdf+A7/wCFfV06tKrHmhJNep4E1Km+Wasz9i0iEic8isfUrL7PIsqDG08gVu2YzGOR6gUssIncR7dxbtX4NGfLI/UGrlPSbZdQuEmxlIhuz/tVzfxu0n+1/h7qNiygpNDLnPIPymvQ7Cwh0y1CJgKMszH1rg/HHjLRr24/sSCdbm7eNy2z5o145Un19q51L2lTTY2heLTPjTwFpgsE8sY/lXftkL34rW1L4fxaXN9rsRi2Jw8ec7D7e1H9isR9R0r4XF4aeHqOMkfomHxMMRBSic/czkMAegFZl5iZSAuffFdJeaS5kYbRUCaE/OVwBXmO7PQjZHLrZhWzgg+lZ/iCLydOmOCWKnAFde+nMZjheParWm+D5fEOq2kCofJDq0rEcBQcnP1q6dGVWahFasmpVjSi5yeiNr4CfDWPwl4PV3Qi9vAbm5LdQ7D7v4DAr0nT7ASRuhBIbIrdstNFnp8p2hcLwB2pui2m+VsjvX6vQpqjBRXRH5fiarrVHOXU5iGV7dmVv3gU4Kt1FacFql7HuXaw9B1FWNc0sQaluI2xuu447nvTIEjzhFH1HBrrU0cvJcUabuXbJHvX1I5H+NH9i2//ADwX/v2K0bWSVHzvLKP4XGaufapP7sf/AHzSbfQXJfc27KRhIUzwal1C4ks42ljba6jgiobT/j5/Kn61/wAe0n0rhaTlY1Wxw/iLVtQvyYZbtzGeNoOB+QrkRoKQXkd1C2yaM7gw9a6bVf8Aj4rPetoxW1iuZovWIju1IeJdrghk7ZHXHtWFqunJY3TxocpwVz1ANbmj/dH/AAP+lZ3iL/j/AD/uLXkZtTjLD87WqPXyyco1+VPRowUtUklYEZGaW4skKhQByMVLB/r3p8/3k/Gvg2fbRbMmz0RZ76OFSoLtjJ7cV6X4X8NwWClIwDgZ3MOSfWuJ0r/kNW3++f5V6dov32/3RX1eTUYezlUtqfMZzWnzxp30MPWfiFY6N4mPhqWyldmjQi4jI6n1BroNO2wOpx9707cV5D48/wCS0Rf9c4v5V67bdYv89q+kpttNHztSKSTQviO3Waxjm5/dtjnryKxrSEFc8Z963dc/5BDf9dF/lWLZ/cNa09dDIsxjEiqOBVnyV9TVeP8A1y/SrdVLRgj/2Q==" style={{width: '30px', height: '30px', borderRadius: '50% !important', objectFit: 'cover'}} />
                    <a href="#" title>Đặng Duy Hiệp</a>
                  </div>
                  <div className="user-account-info dropdown-menu pull-right">
                    <ul className="us-links">
                      <li><a href="/thong-tin-sinh-vien.html" title>Thông tin cá nhân</a></li>
                      <li><a  >Đổi mật khẩu</a></li>
                      <li><a href="/SinhVien/Logout" title>Đăng xuất</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="main-content">
            <div className="container" id="full-resize-table">
              <div className="main-section-content" id="contnet">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <div className="box-df">
                      <div className="portlet">
                        <div className="portlet-title">
                          
                        </div>
                        <div className="portlet-body">
                          <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t.container {\n\t\t\t\t\t\t\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t.dataTables_scrollHeadInner {\n\t\t\t\t\t\t\t\t\t\t\t\tmin-width: 100% !important;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t.dataTables_scrollHeadInner table {\n\t\t\t\t\t\t\t\t\t\t\t\tmin-width: 100% !important\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t.table-custom thead tr th {\n\t\t\t\t\t\t\t\t\t\t\t\tmin-width: 48px;\n\t\t\t\t\t\t\t\t\t\t\t\t/*color:#0e2863!important;*/\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t.table-custom tbody tr td {\n\t\t\t\t\t\t\t\t\t\t\t\tmin-width: 48px;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t.th-chuandaura {\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: lightgoldenrodyellow;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t" }} />
                          <div className="table-wrapper" style={{overflowX: 'auto'}}>
                            <table id="xemDiem_aaa" className="table-custom table table-bordered text-center" width="100%">
                              <thead>
                                <tr>
                                  <th rowSpan={3} style={{width: '100px !important'}}>
                                    <div>STT</div>
                                  </th>
                                  <th rowSpan={3} style={{width: '200px !important'}}>
                                    <div>Mã lớp học phần</div>
                                  </th>
                                  <th rowSpan={3} style={{width: '200px !important'}}>
                                    <div>Tên môn học/học phần</div>
                                  </th>
                                  <th rowSpan={3} style={{width: '100px !important'}}>
                                    <div>Số tín chỉ</div>
                                  </th>
                                  <th colSpan={5}>
                                    Thường xuyên
                                  </th>
                                  <th rowSpan={3}>
                                    Giữa kỳ
                                  </th>
                                  <th colSpan={5}>
                                    Thực hành
                                  </th>
                                  <th rowSpan={3}>
                                    Cuối kỳ
                                  </th>
                                  <th rowSpan={3}>
                                    Điểm<br />tổng kết
                                  </th>
                                  <th rowSpan={3}>Thang<br />điểm 4</th>
                                  <th rowSpan={3}>Điểm<br />chữ</th>
                                  <th rowSpan={3}>Xếp loại</th>
                                  <th rowSpan={3}>Ghi chú</th>
                                </tr>
                                <tr>
                                  <th colSpan={5}>LT Hệ số 1</th>
                                  <th rowSpan={2}>1</th>
                                  <th rowSpan={2}>2</th>
                                  <th rowSpan={2}>3</th>
                                  <th rowSpan={2}>4</th>
                                  <th rowSpan={2}>5</th>
                                </tr>
                                <tr>
                                  <th>1</th>
                                  <th>2</th>
                                  <th>3</th>
                                  <th>4</th>
                                  <th>5</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK1 (2016-2017)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>1</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300048723
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Giáo dục Quốc
                                      phòng 1</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">7,00</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B</td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>2</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300073846
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Toán A1</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className="cl-red" title="DiemThucHanh1">4,50</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className title="DiemTongKet">5,40</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>3</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300200902
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Nhập môn Tin học
                                    </div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,50</td>
                                  <td className title="DiemHeSo12">6,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className title="DiemTongKet">5,40</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>4</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300203002
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Nhập môn Lập
                                      trình</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">7,50</td>
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">6,70</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>5</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300211602
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Kỹ năng học tập trong
                                      lĩnh vực CNTT</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">8,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className title="DiemTongKet">6,30</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK2 (2016-2017)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>6</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      4203000507618
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Toán A2</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,50</td>
                                  <td className title="DiemHeSo12">8,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">8,00</td>
                                  <td className title="DiemThucHanh1">7,50</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">7,50</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B</td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>7</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300094118
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Kỹ thuật lập
                                      trình</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,50</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className="cl-red" title="DiemHeSo13">1,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className="cl-red" title="DiemThucHanh1">4,00</td>
                                  <td className title="DiemThucHanh2">8,50</td>
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">6,30</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>8</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      4203000987101
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Kỹ năng phát
                                      triển nghề nghiệp</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">9,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">8,50</td>
                                  <td className title="DiemTongKet">7,80</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B</td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK1 (2017-2018)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>9</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      4203000588271
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Pháp luật đại
                                      cương</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">10,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,50</td>
                                  <td className title="DiemTongKet">5,60</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>10</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      4203000664363
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Tư tưởng Hồ Chí
                                      Minh</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">10,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">3,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">3,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,40</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>11</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300090813
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Lý thuyết đồ thị
                                    </div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13">7,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">6,90</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>12</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300105839
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Mạng máy
                                      tính</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">7,00</td>
                                  <td className title="DiemHeSo13">7,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">5,40</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>13</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300126422
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Lập trình hướng
                                      đối tượng</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">0,00</td>
                                  <td className="cl-red" title="DiemHeSo12">5,00</td>
                                  <td className="cl-red" title="DiemHeSo13">5,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className="cl-red" title="DiemThucHanh1">4,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,50</td>
                                  <td className title="DiemTongKet">5,20</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>14</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300211702
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Những vấn đề xã
                                      hội và nghề nghiệp</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13">7,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">5,70</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 5,60 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 1,76
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 5,50 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 1,84
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 37
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại:
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình yếu </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Trung bình yếu
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK2 (2017-2018)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>15</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300048863
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Giáo dục quốc
                                      phòng 2</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,50</td>
                                  <td className title="DiemTongKet">6,50</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>16</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300050602
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Giáo dục thể chất
                                    </div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className title="DiemTongKet">6,00</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>17</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      4203000597119
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Đường lối cách
                                      mạng của Đảng Cộng sản Việt nam</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">5,50</td>
                                  <td className title="DiemTongKet">6,00</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>18</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300090119
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Cấu trúc rời rạc
                                    </div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">5,50</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13">6,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">7,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">5,80</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>19</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300099422
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Thống kê máy
                                      tính &amp; ứng dụng</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,50</td>
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">8,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">5,50</td>
                                  <td className title="DiemTongKet">6,90</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>20</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300114624
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Hệ cơ sở dữ liệu</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,00</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13">9,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">7,00</td>
                                  <td className title="DiemThucHanh1">8,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,50</td>
                                  <td className title="DiemTongKet">7,10</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B</td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>21</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300193832
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Anh văn 1</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">5,00</td>
                                  <td className title="DiemHeSo12">7,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">7,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className title="DiemTongKet">6,50</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>22</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300204402
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Lập trình hướng
                                      sự kiện với công nghệ .NET</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">5,00</td>
                                  <td className="cl-red" title="DiemHeSo12">4,00</td>
                                  <td className="cl-red" title="DiemHeSo13">0,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">3,00</td>
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">5,50</td>
                                  <td className="cl-red" title="DiemTongKet">4,90</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>23</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300214503
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Hệ thống và
                                      Công nghệ Web</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">5,00</td>
                                  <td className="cl-red" title="DiemHeSo12">5,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                                  <td className title="DiemThucHanh1">6,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">3,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,50</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 5,30 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 1,80
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 5,50 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 1,82
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 62
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại:
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình yếu </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Trung bình yếu
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK3 (2017-2018)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>24</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300094212
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Cấu trúc dữ liệu
                                      và giải thuật</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">4,00</td>
                                  <td className="cl-red" title="DiemHeSo12">5,00</td>
                                  <td className="cl-red" title="DiemHeSo13">4,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">10,00</td>
                                  <td className title="DiemThucHanh1">6,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">6,90</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>25</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300126603
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Trí tuệ nhân
                                      tạo</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">4,00</td>
                                  <td className title="DiemHeSo12">7,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">8,00</td>
                                  <td className title="DiemTongKet">6,20</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK1 (2018-2019)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>26</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300068501
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Những nguyên
                                      lý cơ bản của chủ nghĩa Mác - Lênin</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>5</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,50</td>
                                  <td className title="DiemHeSo12">6,50</td>
                                  <td className title="DiemHeSo13">6,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,50</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung bình yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>27</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300095902
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Triển khai an ninh hệ
                                      thống</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,50</td>
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2">6,50</td>
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,50</td>
                                  <td className title="DiemTongKet">5,90</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C </td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>28</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300100406
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Nhập môn an
                                      toàn thông tin</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">10,00</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13">7,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">8,00</td>
                                  <td className title="DiemTongKet">6,90</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung bình </td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>29</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300107603
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Tương tác người
                                      máy</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13">7,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">5,50</td>
                                  <td className title="DiemTongKet">6,00</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>30</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300114702
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Kiến trúc và
                                      cài đặt hệ quản trị CSDL</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,00</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1">6,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className title="DiemTongKet">5,30</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung bình yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>31</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300254902
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Kiến trúc và
                                      tích hợp hệ thống</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">2,00</td>
                                  <td className="cl-red" title="DiemHeSo12">2,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1">6,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,70</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung bình yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 5,50 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 1,73
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 5,90 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 2,00
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 86
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: 24 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại: 0
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Trung bình yếu
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK2 (2018-2019)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>32</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300067601
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Tâm lí học
                                      đại cương</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">9,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className title="DiemTongKet">7,30</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B </td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>33</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300203301
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Anh văn 2</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">8,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">3,50</td>
                                  <td className title="DiemTongKet">5,90</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C </td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>34</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300212601
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Công nghệ và
                                      lập trình tích hợp nâng cao</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11">9,00</td>
                                  <td className="cl-red" title="DiemHeSo12">5,00</td>
                                  <td className title="DiemHeSo13">6,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">3,50</td>
                                  <td className title="DiemThucHanh1">6,50</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,90</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>35</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300212702
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Quản trị mạng và
                                      hỗ trợ kỹ thuật</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,50</td>
                                  <td className title="DiemHeSo12">7,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className="cl-red" title="DiemThucHanh1">5,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">5,50</td>
                                  <td className title="DiemTongKet">5,60</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C </td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>36</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300221801
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Điện toán
                                      đám mây</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">7,00</td>
                                  <td className title="DiemHeSo13">6,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">5,40</td>
                                  <td className title="DiemTinChi">1,50</td>
                                  <td className title="DiemChu">D+</td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 5,70 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 1,77
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 5,90 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 1,97
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 99
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: 13 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại: 0
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình yếu </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Trung bình yếu
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK3 (2018-2019)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>37</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300156701
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Phân tích
                                      thiết kế mạng</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,50</td>
                                  <td className title="DiemHeSo12">6,50</td>
                                  <td className title="DiemHeSo13">6,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">6,10</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>38</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300202802
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Anh văn 3</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>2</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,50</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">5,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">8,00</td>
                                  <td className title="DiemTongKet">6,90</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK1 (2019-2020)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>39</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300111404
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Phân tích
                                      và thiết kế hệ thống</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,50</td>
                                  <td className title="DiemHeSo12">7,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,50</td>
                                  <td className title="DiemTongKet">6,60</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>40</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300207501
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Công nghệ mới
                                      trong CNTT</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className="cl-red" title="DiemHeSo11">5,00</td>
                                  <td className="cl-red" title="DiemHeSo12">5,00</td>
                                  <td className="cl-red" title="DiemHeSo13">5,00</td>
                                  <td className title="DiemHeSo14">5,50</td>
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">2,50</td>
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,80</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>41</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300213703
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Hệ thống máy
                                      tính</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11">5,50</td>
                                  <td className title="DiemHeSo12">6,00</td>
                                  <td className title="DiemHeSo13">6,00</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">7,50</td>
                                  <td className="cl-red" title="DiemThucHanh1">4,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">6,20</td>
                                  <td className title="DiemTinChi">2,50</td>
                                  <td className title="DiemChu">C+</td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>42</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300241901
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Phát triển hệ
                                      thống đa phương tiện</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">7,00</td>
                                  <td className title="DiemHeSo12">6,50</td>
                                  <td className title="DiemHeSo13">6,50</td>
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                                  <td className title="DiemThucHanh1">6,50</td>
                                  <td className title="DiemThucHanh2">6,50</td>
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">5,00</td>
                                  <td className title="DiemTongKet">5,50</td>
                                  <td className title="DiemTinChi">2,00</td>
                                  <td className title="DiemChu">C </td>
                                  <td className title="XepLoai">Trung Bình</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 4,80 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 1,66
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 5,90 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 2,00
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 117
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: 13 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại: 3
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Trung bình yếu
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK2 (2019-2020)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>43</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300231606
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Quản trị và bảo
                                      trì hệ thống</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">8,00</td>
                                  <td className title="DiemHeSo12">8,50</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,00</td>
                                  <td className title="DiemThucHanh1">9,50</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">6,50</td>
                                  <td className title="DiemTongKet">7,60</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B </td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>44</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300231702
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Công cụ Web
                                      và Website hướng dữ liệu</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">8,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1">6,50</td>
                                  <td className="cl-red" title="DiemThucHanh1">4,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,90</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>45</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300279004
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Khóa luận tốt
                                      nghiệp</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>5</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">7,00</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B </td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>46</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300309802
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Thực tập doanh nghiệp
                                    </div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>5</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi">7,00</td>
                                  <td className title="DiemTongKet">7,00</td>
                                  <td className title="DiemTinChi">3,00</td>
                                  <td className title="DiemChu">B </td>
                                  <td className title="XepLoai">Khá</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 10: 6,70 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình học kỳ hệ 4: 2,63
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy: 6,00 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Điểm trung bình tích lũy (hệ 4): 2,08
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đã đăng ký: 133 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ tích lũy: 133
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ đạt: 16 </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Tổng số tín chỉ nợ tính đến hiện tại: 0
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực tích lũy: Trung bình </td>
                                  <td className="hidden" />
                                  <td colSpan={2} className style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                    Xếp loại học lực học kỳ: Khá
                                  </td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK1 (2020-2021)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>47</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300325602
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Hệ thống phân
                                      tán</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>3</div>
                                  </td>
                                  <td className title="DiemHeSo11">6,00</td>
                                  <td className title="DiemHeSo12">7,00</td>
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className="cl-red" title="DiemChuyenCan1">2,00</td>
                                  <td className title="DiemThucHanh1">7,00</td>
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className="cl-red" title="DiemThi">4,00</td>
                                  <td className="cl-red" title="DiemTongKet">4,90</td>
                                  <td className title="DiemTinChi">1,00</td>
                                  <td className title="DiemChu">D </td>
                                  <td className title="XepLoai">Trung Bình Yếu</td>
                                  <td className title="GhiChu" />
                                </tr>
                                <tr>
                                  <td colSpan={21} className="text-left row-head">HK2 (2020-2021)</td>
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                  <td className="hidden" />
                                </tr>
                                <tr>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{}}>48</div>
                                  </td>
                                  <td style={{width: '200px !important'}}>
                                    <div style={{}}>
                                      420300207401
                                    </div>
                                  </td>
                                  <td style={{width: '200px !important'}} className="text-left">
                                    <div style={{wordBreak: 'break-word'}}> Phát triển hệ
                                      thống tích hợp</div>
                                  </td>
                                  <td style={{width: '100px !important'}}>
                                    <div style={{display: 'inline-table'}}>4</div>
                                  </td>
                                  <td className title="DiemHeSo11" />
                                  <td className title="DiemHeSo12" />
                                  <td className title="DiemHeSo13" />
                                  <td className title="DiemHeSo14" />
                                  <td className title="DiemHeSo15" />
                                  <td className title="DiemChuyenCan1" />
                                  <td className title="DiemThucHanh1" />
                                  <td className title="DiemThucHanh2" />
                                  <td className title="DiemThucHanh3" />
                                  <td className title="DiemThucHanh4" />
                                  <td className title="DiemThucHanh5" />
                                  <td className title="DiemThi" />
                                  <td className title="DiemTongKet" />
                                  <td className title="DiemTinChi" />
                                  <td className title="DiemChu" />
                                  <td className title="XepLoai" />
                                  <td className title="GhiChu" />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Hiep;