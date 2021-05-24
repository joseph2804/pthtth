
function Duong() {
  return (
    <div>
    <input id="UID" name="UID" type="hidden" defaultValue={88} />
    <div id="focus-overlay" />
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="menu-btn">
              
            </div>
            <div className="user-account dropdown">
              <div className="user-info" data-toggle="dropdown">
                <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACWAHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkQM5460nCkY4z14pygjOcfWkOCa/qs/DRA2XHHHtQcZ7A0Ahc8YpN24dcigaQnVyc9felY4Hbr61la74k0/w1YveX9wltCg6seT7Cvn/x3+07diRrfQ7RYoySPOnOWI9QBXkY3NMNgNKstey3PQwuAr4t/ulp3Po271G3sk3XE0cC/wB52Arn7r4l+GLafyZNatFlH8HmivinW/Het+Irsz6hfy3RP8DN8g/Css6nMYwuQMY+bnPFfHV+K5837mmrebPpafDyt+8nr5H31p/irSdVwLTUbefPTZIM1qK+RwePavzwi1W7gmWWK4kilUgho22kH8K9M8FftE+IfDG2G9I1W1AAAlOHX8e9deF4phJ8uJhbzWv4GNfh+cVejK/kz7HyTzntSLyOeTXi/gn9pHS/EmoLZ3du2nsxAVnYYzXsVvMk0SujBwwyCDX12FxtDGx5qEr2PnMRhauFly1Y2JwARySPpSquR2pFIYD2pSTnGcV27nKByRSYPp/KnMoBHFJtHoKLAPGQDim7dx4qQ4A6Z9xTOjGtNiUhjZzgfjWX4h1yDw7pVxfXT7YYVLH39BWmWwfavEPj/wCJlvBDoVu+JIz59wc4AUDIFeRmmNWAws63Xp6no4LDPF1401t19DxX4neO9S8bajLPMzmEMUhgU5VF9cep/rXByRRB8CUBdoJH3jn044NdqbBI7J5CrkucB8dPUVgahaJcgmL9zGhK/dyWAA/rnpX4bUxM603Oo7t7s/TadNUIqMdEYRBU4IwevNNzinyhN58vdt7butNaNkxkEZGRkdRUNvodaYgNLnBpMZowcVKbKJYJGjkBVmUnurbf1r7T+COrvq3gHTmmmDzKNpO4MeD618UhCu1mB2H8M173+yv4mMWs32jTSFllTzYlY5Axwcenb86+r4exXsMbGMtpaHz+dUPbYZyX2dT6gjG1R0zTmPTApI3A4xwaUtjoOK/X0z832F3bx9KMmgkMPx60bT60EjySByMU3vT2ALemKaxySat36haxCwyTXz38atLjfxqr5CGSBWOO55xn16fpX0P+f+NfP3xzkax+IGkSM2IJ7V04H8W4AfzNfIcUR5svb7NH0OSStjEu6Zw0mjstjAXxsAYBAMFiRWA/g+7uhI5BiWNclxjCj0HHtXsvhfRv7cmkVYTMsBGGxnJOea7V/huztFAbclmG9lx0Udvxr8Nq11CVj9PhQ9otUfLI8B3NuhaODe85xErjgDB5PtTNL+F+ra9feRarJdYbaGjTA/A+lfYemfCWTUbjZPbkpj5lI42+lehaJ4FttIth9nt40BGMqo+lczx0lsehDL1J3Z8r+Ef2YEt4pZdZnZy3AVOgGc16hoPwN0PTrFfLs4/mXnzACcV7NJozxDBiyuMdKieF40wUAwOwriqYqU3qz0lg6cVoj5u+IfwG0aXSpDaW/wBlvEy6SqO/oR0rw74SzTeHPinpKMRlpjE5XIAByMfmBX214rthJbOSMkjkV8bXtnHo3xVtxGFDrqChT6ZfJr6DK8RKNaDv1VvvPmcyoKEJJLRpo+xVb3P+FPEnPf60xD+7X3A5pyjD+lf0enc/GHoSBgTRuHvTF4B9KK0TJSJ2GTTWXB3HrinuQrYHBFNJ/OtTNajTx049q8a/aG8LS63Do1zBxJHKYsj0bH+FeyFizAYyx6VT+Jnge/8A+EKXU4DHcxRXEYkReGQlgp+vWvkuJcVh6GClSrSs5fD5tan0GTYavXxKnSjdR38kxnwk8Np4Y8PWUbQiR5MMeMkjFelaxrh8PXMUp0cXkjoMBQcKOo5xWp4X0c6LoiXf2Xz2jjVfLx14rifiF4y8bTeENZ1myNpbf2eVEVkIvNmde7beOPpX8+VpU51eWKuz9hhGVOlzSdjtPD/xQ0iZ1ivNJk0+Q9WxuUmu2jv9JvbcOsYwBkFRXzp8Kdb1vxbpdtdaykP2meVlEbReU23PynB6Zr3iXSLXRNIDSTjeVOUU9DXDWn7J8tj0MPGVVXvczvEvjHRNLtGDREuBn5RyRXl2ofESS/lZbPSWdP75NaPiWOFkaZWRwo53dBXi174k8aJ8RodI0yRI9LmKkXP2YeUFxliWJ7V00f3kb2RjiJSpSSbZ3usahcyWbS3EBCv0CjOK+dviR4UUfErw7dwgAXlynbowIyfyr6N0fV9VknuLHVore4EblUuoB8ki9j9a4vxp4N/tb4g+EHVzHHDcSyEqueiE4r1sFVpwmnLozysZSqVIcsep26KVRV9AOacow4HpTIm3KC24DnhuvWpEAJPtX9H4WvDFUY1qXwyV0filejPD1ZUqm6eo/GQc8e1N2rTkGDjvTsV1nPcex3MeAaYzBjgUp4P+FDLhq1ZmkLBIqyx7hn5gQfTmvUNYFvJ4ITT5IxJPPcLcEjsu8f4V5aQN3HH0r1PRY11fQLaWJyl0kZCMRkOCOUI+vQ1+T8e0n7PD1+ibT+Z+k8HVIudeg92rr5f8OdpomivqFnheY8DCgVU8RaZapB5DWsYZRjOwZNdD8O9RWGGMSDgcEGtPxbpMdwDKjLl+RivxHEU5QnKUXrc/VsNKE4xjJdDybRvDSC9LomMZIwKPEmYrSSPLt7nnFdObeS2m8qKZYSyktM33QO9Y+q6xoMunFUuRcSR5SSRGBy3YVzck6klKb1O5TjB2irHmK2/2sMAee4xRZ2Ail+aMMvoRnNW4ZLea9eWyu4mMPEtuGy2K6dNGjZYpcbdwzg12JygvdMXyy+JGFJoS3cRdYgpXuoxiuUurcQeI9NZ9oMMx+ZuwKkH+deyFYbLSXGBuYYrzDULIahrkjIjN5ClwFH8XbPtXZhvtOXY8vENc0Uu5jXcKw3kqJ8ygnn8aRF56UmC08jHIYnkGpFG4H2r+mcmp+yy+jD+6vyPwXNantMbVmusn+YgGSaNg9KUDA6mjA9/zr2rHkDvvHnvSAZPTj0pcbSTgZxShSCPU9q1aEhuMn0rqPCfj698JwSQxQRXMTg7RKOUPqDXMdD9KRhnAzivPxmDoY6k6OIipRfRnZhsTVwlRVaEnGS7Hsfw+8QS3Vus0gwWYlsdM55xXoU8jX8KrnHHDZrxf4bXy/Z7iEt8yOCB7GvUba++z2xdckgZwK/mriTBrBY2pTirJPT0P3PIMZ9ZwsJzettfUtat4agu7AxzEncDllODXnGreHdGspBaLAkS5Gdvylj6k96teJPiH4ghla20vTpCzHBnkxtX6Vw+sXnixHMkwhlJ+bczKefyr56FKUveR9PC9TSxetfDenRal58MQQ7juCDG76+tdVcuqW6lOVHb0ryiPxJr9hKJJrdZgM5QMM10WleIpb6PEsMluzc7JKudOS1uZzlyuzNjWtWMVvtXJyOma4i28Q6jp13cCzWL9+u13cZK+mK19VnDsBuYY7g4rnQytKxVcAngCv0XhHLqeMrtVo3ild/ofn3EmOqYamnSlaTen6jlDAZdy7k5Zj3PrTwcGkVcjnJpCAB1Nfu8IKEVGKskfkcpOTcm9Ry8D1NG80hGV96btPqatEEhGTwOKTOCBnn3p468ZxTSuWFaSJQgb6ikYcDHU05VORSFc4FZtFovaHqraPfrMuSp4ceor13Q9VW/jA3HmvHLCwk1C6WKNC2AWbHYDqa9ds9KNvZwzQZyqgEHvX4zx7DDRlTb+OSf3dD9J4SnX9+2sUbs9pvBKDPFec+J9G1a7uj5RZUHTavWu+i11bVNr/KcdG61h6n4xt4GccMevNfjlKMoy1P1aNVWumcXa6FNbHbcAlxzkjrTrpUgTewAZeMnrVu68R/azuZsY5BNYl/ctqMgWDkdWbtXbThKcry0RzV6qS03Mq9uyznB5boKqxrtUYPStKHQZbqO9miVne0iEshH93IBP61nKAV79etf0BwfSoLA+0pL3m9flsfivElWrLGclTZLQdjAB/QUMMZ9DSYDAc8d6cBn6CvvD5MaABRil24H44o2+4pisPZs85xmkLZYYFPSNpHVFUs7HAVec16F4T+Bmv+JI1ubxP7IsT/y1uB87D2Wsa+IpYeN6srF06cqjtBHnYGPqegro/Dvw81vxKQ1tZvFB/wA95RtUfnXvnhf4M6HoLIy25vbgcme55GfUL0FdreWsNrAI0Cqo9OK+fr5zG/LRXzZ6VPASes2eOeFvhbH4aiuZLi4NxczxGLhflUH0qzbQ+QrQyDaUOz8q7y9QlyMfKOmK5vW9NcP9qjH/AF0A/nX5pxThKuY0ViFrKP5H3XD2JhgajpS0jL8zmdXggEgE6b0kIXp3rldU8I6dcF3eWaHPQI9dvIfNG4gcd6xdVshcZYMK/JaUpL3b2P0SVr3OEGhW0DfJvlx/FIc5q3DZrBFngE9OO1a89ssQABBJ9qpTxS3MsVrbRtLPKwREXksTXWryfKjJOKTk9jvPgL4Wh1rUtenuYxJam2+zOrDht55H6Vk+OP2dNW0ESXWik6pZnLeSP9ag+nevcvhv4SXwV4bt7FwDdyHzblx3c9voOld7aSRqiuxAGcV+sZPicRlVGKh13R+a5pSpY+tKT+TPz0ntZbSZopo2ikQkMjAgg/Sm7cnA9c4r7s8dfBvw54/tGkubZYrwj5bq3AV/x9a+afiB+z34h8Ghrq0jbVtPBJ8yBfnUf7S9fyr9EwOe4bF2jP3Zdn+jPkcTl1bD6pXXc8oC8E+9GB/dqWWFo5CrAqQeVIwRTdtfRp32PL2Pszwt8I/DPgOJXgtFnvAMNc3HzOT7en4V0d0EmHOSo4wOlad5bJIpXOcmqcFvtDIM9c4PevyB1p1X7SpJt+Z9uqcYLlirIqpITERFEqDpub0rEvkO4jaH9d3rXVSRBI+cAe1Zs0CMPlHHrWlKok72JnBs5ee3LKH654OOlUXtsE8celdZDZrKXQr05qndacFDDYK7FUUtGQotHn+p+HxGWltkJU5LRjt9K4vVrXnK5HPSvY2sdjFydqjksegFcpqR03V7/wAw2xjtouGnU7Q59f8A9VfHZlw8sRP22Esm910Pp8DnPsI+yxGq6dzzqDTJ7pgI42dj0UDOTXqvwy+Gh8PuNW1SMNqTDEMR58hfX/eP6V03gvQ9GuIF1CwQO/3cNyUI9q7O1sdz5bOfpXPgMpWDm6ld3ki8bmbxUfZ0VZfiQ2dqZz90jPNaVzaKUSLYSVGSw7VpWNqsQHAzTY2S5kk3Dbzge9evKs5O62R4yhZWZBp7G3XbG+1x0B5BrUjnd1YyxofXFNitooFDMvNQXlyZWCDhfauaTVR6I6E3Bas4nxv8EvCfj8M1xarpt+2StzbgISfUjoa4n/hj3Qv+g7c/98rXrssZA7kg8HvUeJP7zV6tHG4yhHkpVml9/wCZw1MPhqkuadNX+4rxHecd/eoLn/R7gFeg7Gp7f/WVBqP+uqI/FYRS1K5JVfRjjFR2zfKfT0puo/ci/wB7/Glt/un611JJRM29SW3AW8jHP7zI+lWZ7JWQs3QAniq0H/H7af7zfyrSuP8Aj3f/AHTWU21JWNEvdZ5P4o1WXUGltoSYbdSVYdGb61iQ6OLm2jjZzsUH5QfWr2of8fNz/wBdDT7H/VD/AD3r6PlUYJI8pSblqS6Jqc3g27S4h/eQkhZIT0Zf8a9305ob6yguYkKLKgYBuoyK+fdZ/wCPb8R/OvfvDP8AyL2n/wDXFf5V4GaRSUZrc9XCa3TNGVFjhZuc461nIixsMZ+taV1/qG+lZx+8K8Om9DtmKZM55PtQgyx+lM9afH978K1asZbsQrlwDyD09qd5A9qT+NfrU1JtotJPc//Z" style={{width: '30px', height: '30px', borderRadius: '50% !important', objectFit: 'cover'}} />
                <a href="#" >Phạm Hải Đường</a>
                
              </div>
              <div className="user-account-info dropdown-menu pull-right">
                <ul className="us-links">
                  <li><a href="/thong-tin-sinh-vien.html" >Thông tin cá nhân</a></li>
                  <li><a >Đổi mật khẩu</a></li>
                  <li><a href="/SinhVien/Logout" >Đăng xuất</a></li>
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
                      <div className="caption">
                        
                      </div>
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
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">6,50</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11">9,50</td>
                              <td title="DiemHeSo12">9,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,50</td>
                              <td title="DiemThucHanh1">5,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">6,40</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11">9,00</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,50</td>
                              <td title="DiemTongKet">6,20</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">10,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">10,00</td>
                              <td title="DiemThucHanh1">7,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">9,50</td>
                              <td title="DiemTongKet">7,90</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,50</td>
                              <td className="cl-red" title="DiemTongKet">4,90</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>6</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  4203000506109
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Giáo dục thể chất
                                </div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>4</div>
                              </td>
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">6,00</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                                <div style={{}}>7</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">8,50</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,50</td>
                              <td title="DiemThucHanh1">8,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">5,50</td>
                              <td title="DiemTongKet">7,30</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>8</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300090129
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Cấu trúc rời rạc
                                </div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">8,00</td>
                              <td title="DiemHeSo13">7,50</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">9,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,50</td>
                              <td title="DiemTongKet">8,10</td>
                              <td title="DiemTinChi">3,50</td>
                              <td title="DiemChu">B+</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>9</div>
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
                              <td title="DiemHeSo11">7,50</td>
                              <td className="cl-red" title="DiemHeSo12">5,00</td>
                              <td className="cl-red" title="DiemHeSo13">1,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">10,00</td>
                              <td title="DiemThucHanh1">6,50</td>
                              <td title="DiemThucHanh2">9,00</td>
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">7,20</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>10</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">9,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,00</td>
                              <td title="DiemTongKet">7,00</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>11</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300213703
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Hệ thống Máy
                                  tính</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>4</div>
                              </td>
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">2,00</td>
                              <td className="cl-red" title="DiemThucHanh1">3,50</td>
                              <td title="DiemThucHanh2">7,00</td>
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">3,50</td>
                              <td className="cl-red" title="DiemTongKet">4,20</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
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
                                <div style={{}}>12</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">10,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">5,00</td>
                              <td title="DiemTongKet">5,80</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>13</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">9,00</td>
                              <td title="DiemHeSo13">8,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">5,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">9,50</td>
                              <td title="DiemTongKet">8,00</td>
                              <td title="DiemTinChi">3,50</td>
                              <td title="DiemChu">B+</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>14</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300094220
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Cấu trúc dữ liệu
                                  và giải thuật</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>4</div>
                              </td>
                              <td title="DiemHeSo11">6,00</td>
                              <td title="DiemHeSo12">9,00</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">8,50</td>
                              <td title="DiemThucHanh1">8,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">9,50</td>
                              <td title="DiemTongKet">8,70</td>
                              <td title="DiemTinChi">3,80</td>
                              <td title="DiemChu">A-</td>
                              <td title="XepLoai">Giỏi</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>15</div>
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
                              <td className="cl-red" title="DiemHeSo11">5,00</td>
                              <td title="DiemHeSo12">6,50</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,00</td>
                              <td className="cl-red" title="DiemTongKet">4,70</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>16</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300126421
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Lập trình hướng
                                  đối tượng</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>4</div>
                              </td>
                              <td title="DiemHeSo11">10,00</td>
                              <td title="DiemHeSo12">7,00</td>
                              <td title="DiemHeSo13">8,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,50</td>
                              <td title="DiemThucHanh1">8,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,50</td>
                              <td title="DiemTongKet">7,50</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>17</div>
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
                              <td title="DiemHeSo11">7,50</td>
                              <td title="DiemHeSo12">7,00</td>
                              <td title="DiemHeSo13">6,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">5,80</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 6,90 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 2,67
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,70 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,55
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 42
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực học kỳ: Trung bình
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
                                <div style={{}}>18</div>
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
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">6,50</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>19</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  4203000664413
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Tư tưởng Hồ Chí
                                  Minh</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>2</div>
                              </td>
                              <td title="DiemHeSo11">9,00</td>
                              <td title="DiemHeSo12">8,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">5,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">6,40</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>20</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">5,50</td>
                              <td title="DiemTongKet">6,00</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>21</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">6,50</td>
                              <td title="DiemHeSo13">8,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">5,50</td>
                              <td className="cl-red" title="DiemThucHanh1">5,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,50</td>
                              <td title="DiemTongKet">5,30</td>
                              <td title="DiemTinChi">1,50</td>
                              <td title="DiemChu">D+</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>22</div>
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
                              <td title="DiemHeSo12">7,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">5,00</td>
                              <td title="DiemTongKet">5,50</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>23</div>
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
                              <td title="DiemHeSo11">7,50</td>
                              <td className="cl-red" title="DiemHeSo12">4,00</td>
                              <td className="cl-red" title="DiemHeSo13">0,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                              <td title="DiemThucHanh1">7,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">5,70</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>24</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300231603
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Quản trị và bảo
                                  trì hệ thống</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">8,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">8,00</td>
                              <td title="DiemThucHanh1">7,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">7,20</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B</td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 5,10 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 1,88
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,20 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,33
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 63
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td className="cl-red" title="DiemHeSo11">5,00</td>
                              <td title="DiemHeSo12">7,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,00</td>
                              <td title="DiemTongKet">5,70</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                                  420300059703
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Đường lối cách
                                  mạng của Đảng Cộng sản Việt Nam</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">10,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">8,00</td>
                              <td title="DiemTongKet">7,30</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B </td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>27</div>
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
                              <td title="DiemHeSo11">10,00</td>
                              <td title="DiemHeSo12">5,50</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">3,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">9,50</td>
                              <td title="DiemTongKet">7,30</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B </td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>28</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">8,00</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">5,90</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C </td>
                              <td title="XepLoai">Trung bình </td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>29</div>
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
                              <td className="cl-red" title="DiemHeSo11">4,50</td>
                              <td title="DiemHeSo12">6,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,00</td>
                              <td title="DiemThucHanh1">6,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,00</td>
                              <td title="DiemTongKet">5,20</td>
                              <td title="DiemTinChi">1,50</td>
                              <td title="DiemChu">D+</td>
                              <td title="XepLoai">Trung bình yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 6,40 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 2,38
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,40 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,42
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 75
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: 12 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực học kỳ: Trung bình
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
                                <div style={{}}>30</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">3,50</td>
                              <td title="DiemTongKet">5,50</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C </td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>31</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td className="cl-red" title="DiemHeSo12">4,00</td>
                              <td className="cl-red" title="DiemHeSo13">5,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">5,00</td>
                              <td title="DiemThucHanh1">6,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,00</td>
                              <td title="DiemTongKet">5,10</td>
                              <td title="DiemTinChi">1,50</td>
                              <td title="DiemChu">D+</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>32</div>
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
                              <td title="DiemHeSo11">8,00</td>
                              <td title="DiemHeSo12">8,50</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">5,50</td>
                              <td className="cl-red" title="DiemThucHanh1">4,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">5,00</td>
                              <td title="DiemTongKet">5,40</td>
                              <td title="DiemTinChi">1,50</td>
                              <td title="DiemChu">D+</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>33</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300213706
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Hệ thống Máy
                                  tính</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>4</div>
                              </td>
                              <td title="DiemHeSo11">6,00</td>
                              <td title="DiemHeSo12">5,50</td>
                              <td title="DiemHeSo13">6,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,50</td>
                              <td className="cl-red" title="DiemThucHanh1">3,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">5,50</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C </td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>34</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13">6,50</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">4,00</td>
                              <td title="DiemTongKet">5,20</td>
                              <td title="DiemTinChi">1,50</td>
                              <td title="DiemChu">D+</td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 5,30 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 1,70
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,30 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,30
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 90
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: 15 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                                <div style={{}}>35</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300068504
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Những nguyên
                                  lý cơ bản của Chủ nghĩa Mác – Lênin</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>5</div>
                              </td>
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">9,00</td>
                              <td title="DiemHeSo13">8,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">6,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td title="DiemTongKet">6,80</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
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
                                <div style={{}}>36</div>
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
                              <td className="cl-red" title="DiemHeSo11">1,00</td>
                              <td className="cl-red" title="DiemHeSo12">4,00</td>
                              <td title="DiemHeSo13">6,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">5,50</td>
                              <td className="cl-red" title="DiemTongKet">4,80</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D </td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>37</div>
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
                              <td title="DiemHeSo12">6,00</td>
                              <td className="cl-red" title="DiemHeSo13">5,00</td>
                              <td title="DiemHeSo14">5,50</td>
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">2,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td className="cl-red" title="DiemTongKet">4,90</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D </td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>38</div>
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
                              <td title="DiemHeSo11">6,50</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13">7,00</td>
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,00</td>
                              <td title="DiemThucHanh1">7,00</td>
                              <td title="DiemThucHanh2">7,00</td>
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">3,00</td>
                              <td title="DiemTongKet">5,70</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C </td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>39</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300254905
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Kiến trúc và
                                  tích hợp hệ thống</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td className="cl-red" title="DiemHeSo11">1,50</td>
                              <td className="cl-red" title="DiemHeSo12">0,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">4,50</td>
                              <td className="cl-red" title="DiemThucHanh1">4,50</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">3,00</td>
                              <td className="cl-red" title="DiemTongKet">3,50</td>
                              <td title="DiemTinChi">0,00</td>
                              <td className="cl-red" title="DiemChu">F </td>
                              <td className="cl-red" title="XepLoai">Kém</td>
                              <td title="GhiChu">Học lại</td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 3,20 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 0,67
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,20 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,22
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 104
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: 9 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ nợ tính đến hiện tại: 6
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực học kỳ: Kém
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
                                <div style={{}}>40</div>
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
                              <td title="DiemHeSo11">8,50</td>
                              <td className="cl-red" title="DiemHeSo12">0,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">8,00</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">5,50</td>
                              <td title="DiemTongKet">6,00</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>41</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300202801
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Anh văn 3</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>2</div>
                              </td>
                              <td title="DiemHeSo11">7,50</td>
                              <td title="DiemHeSo12">8,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">7,50</td>
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,00</td>
                              <td title="DiemTongKet">6,80</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>42</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300214507
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Hệ thống và
                                  công nghệ Web</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td title="DiemHeSo11">7,50</td>
                              <td className="cl-red" title="DiemHeSo12">5,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">8,00</td>
                              <td title="DiemThucHanh1">8,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,50</td>
                              <td title="DiemTongKet">7,60</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B </td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>43</div>
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
                              <td title="DiemHeSo11">7,00</td>
                              <td title="DiemHeSo12">7,50</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">8,00</td>
                              <td title="DiemThucHanh1">6,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td className="cl-red" title="DiemThi">5,00</td>
                              <td title="DiemTongKet">6,20</td>
                              <td title="DiemTinChi">2,50</td>
                              <td title="DiemChu">C+</td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>44</div>
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
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1">7,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,00</td>
                              <td title="DiemTongKet">7,00</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B </td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 10: 6,80 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình học kỳ hệ 4: 2,77
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy: 6,30 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Điểm trung bình tích lũy (hệ 4): 2,29
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đã đăng ký: 122 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ tích lũy: 119
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Tổng số tín chỉ đạt: 15 </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
                                Xếp loại học lực tích lũy: Trung bình </td>
                              <td className="hidden" />
                              <td colSpan={2} style={{verticalAlign: 'top !important', textAlign: 'left !important'}}>
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
                                <div style={{}}>45</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300095907
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Triển khai an ninh hệ
                                  thống</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>3</div>
                              </td>
                              <td title="DiemHeSo11">6,00</td>
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1">5,50</td>
                              <td className="cl-red" title="DiemThucHanh1">5,00</td>
                              <td title="DiemThucHanh2">5,50</td>
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">5,50</td>
                              <td title="DiemTongKet">5,50</td>
                              <td title="DiemTinChi">2,00</td>
                              <td title="DiemChu">C </td>
                              <td title="XepLoai">Trung Bình</td>
                              <td title="GhiChu" />
                            </tr>
                            <tr>
                              <td style={{width: '100px !important'}}>
                                <div style={{}}>46</div>
                              </td>
                              <td style={{width: '200px !important'}}>
                                <div style={{}}>
                                  420300279001
                                </div>
                              </td>
                              <td style={{width: '200px !important'}} className="text-left">
                                <div style={{wordBreak: 'break-word'}}> Khóa luận tốt
                                  nghiệp</div>
                              </td>
                              <td style={{width: '100px !important'}}>
                                <div style={{display: 'inline-table'}}>5</div>
                              </td>
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">7,40</td>
                              <td title="DiemTongKet">7,40</td>
                              <td title="DiemTinChi">3,00</td>
                              <td title="DiemChu">B </td>
                              <td title="XepLoai">Khá</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11">6,00</td>
                              <td title="DiemHeSo12">6,00</td>
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td className="cl-red" title="DiemChuyenCan1">2,00</td>
                              <td className="cl-red" title="DiemThucHanh1">4,00</td>
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi">6,50</td>
                              <td className="cl-red" title="DiemTongKet">4,70</td>
                              <td title="DiemTinChi">1,00</td>
                              <td title="DiemChu">D </td>
                              <td title="XepLoai">Trung Bình Yếu</td>
                              <td title="GhiChu" />
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
                              <td title="DiemHeSo11" />
                              <td title="DiemHeSo12" />
                              <td title="DiemHeSo13" />
                              <td title="DiemHeSo14" />
                              <td title="DiemHeSo15" />
                              <td title="DiemChuyenCan1" />
                              <td title="DiemThucHanh1" />
                              <td title="DiemThucHanh2" />
                              <td title="DiemThucHanh3" />
                              <td title="DiemThucHanh4" />
                              <td title="DiemThucHanh5" />
                              <td title="DiemThi" />
                              <td title="DiemTongKet" />
                              <td title="DiemTinChi" />
                              <td title="DiemChu" />
                              <td title="XepLoai" />
                              <td title="GhiChu" />
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

export default Duong;
