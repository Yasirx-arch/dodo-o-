const { Client, MessageEmbed } = require("discord.js"); const Discord = require("discord.js"); const client = new Discord.Client()
let arr = [

  "NzY3MzM0OTk4MzQzODExMDkz.X4wavQ.VVJYuakPoglHKt4e0NYb0cFrmIE",
  "NzY3MzExODU1NTYzMDQ2OTMz.X4wFBQ.Kt5ktYD4PxJqNfvPBXs5edA_R3Y",
  "NzY3MzIwNTMyNDI4NzgzNjQ2.X4wNZg.bSYg8AaT_GUKR6LWXaJt35LdJTg",
  "NzY2OTQ1NzQ2MzgwOTE0Njg4.X4qwMQ.a8OXm5K3gYRRctoWLBgEgm1i6Ls",
  "NzY3MzExNDk2NTk4MjU3Njc0.X4wEwQ.vTIpsyAkr3zHJdlWfIfc1-7pPV8",
  "NzY3MzE0MjA4NzE0MTI5NDI4.X4wHPA.kSm1XFX6Jg_0uH_i80IaaPM9H1s",
  "NzY3MzEzMjQxMDU5NjIyOTIy.X4wGUw.2Bp1epPnMMDeo6rn5US6PgnTkNY",
  "NzY3MzE4NTQyNzA1NzU0MTMy.X4wLRA.y08vwCEa36jYn64Heibfve6qQ5Y",
  "NzY3MzM2MDYwMzAzNzA0MDY0.X4wcyQ.4oD0Q-6uo6-TDXlXQb92bWIXTkM",
  "NzY3MzE4ODUyMDgxNjgwNDI0.X4wLfw.hSEjDHUXFmq0zfROtY9E_Kbt3gc",
  "NzY3MzE3MTEwMjQxMjMwODQ5.X4wJ4g.RNzsIAHHdR4CRS6Mg72Smg6Dk10",
  "NzY3MzE2ODUyOTA0MDM0MzA0.X4wJsA.7xg4yIcUN4GRlGZqDs9aq5Z1Nb8",
  "NzY2OTQ2NzE0OTIwOTQzNjM2.X4qw7Q.IWVIczV81y58_Kq-vIRdIv7AnUI",
  "NzY3MzE5OTM4MDQxNTExOTM2.X4wM3g.gXyih9J2_2DsuEp_PTtY_zuRHgM",
  "NzY2OTUyNTA4MDQ3ODg0Mjg5.X4q2bA.mxX16IHX4K4Hbj6yhLanhAb5zho",
  "NzY3MzE2MDU4MjU5MzI0OTQ5.X4wJLQ.f-lXzia_Ra04jo_1gyV1ow2WsJk",
  "NzY3MzE3NTg5MDUwNjU0NzMw.X4wKbw.4vdcbp2M13ZQfgNqZ2BD_fvrRf8",
  "NzY3MzEyMTczMDg0MTgwNTMw.X4wFbA.XO4dUV_KiMz3TBZ907AlLRCRbRk",
  "NzY3MzM3NjE4MzQ1NTU4MDE2.X4wdXw.Ok1dFCotIY8h3gsMhwwBtf56l7k",
  "NzY3MzE5Njc3MzExMzg1NjEx.X4wMUA.lecXvwYtUcy6oaUcCUFECPqMTPM",
  "NzY3MzE4MzI2MzYzMTYwNTg3.X4wLCA.hlRupgh8eFsvgJESFwqW11UyuYU",
  "NzY3MzE0NDYxMDk4NzcwNDQy.X4wHlg.oZjY5nDLFlrFA_DOL4qqW0zBDlk",
  "NzY3MzIyMDkwNjY2OTgzNDI2.X4wOkA.pYkHER9D21LCpYY7fkV88mg0H9k",
  "NzY3MzE3OTMzNDE1NTk2MDUy.X4wKxw.7VWBP1RsX2lzcLhjwvuWWqvYVXU",
  "NzY3MzIyODY1NDI2MTA0MzIx.X4wPfw.voSwjECm1fIEliFHdbP3gUhSWK8",
  "NzY3MzE3MzIyMzIyMjgwNDQ4.X4wKIA.GnvPT6a1LJBNpJ_iJoPY9RXdrv8",
  "NzY3MzEzNTA2NTYyOTk4Mjkz.X4wGzA.35s7KNyxiciGhMRmZixQdy8YRT0",
  "NzY3MzIyNDE0MjE2MzgwNDE2.X4wPAg.XKcw4M0BKMxhTZsMyxk-AOZaa_0",
  "NzY3MzE1MTU5MDYzNDYxOTE5.X4wIoQ.w8HQEh6NXYcSBDIur8gDE75JGhE",
  "NzY2OTQxOTM5MDgxMjgxNTU3.X4qsmA.iToraduOU6J1z2_yRdfZq2cpni4",
  "NzY3MzEyODg3MjM2MjYzOTU3.X4wGBQ.muY-iGZZxulw59v6vyHmkXus7ec",
  "NzY3MzEzOTk0MTEyNTY1Mjc4.X4wG-w.3Ya1h9DyDVD0emo_kHY8vf4WuPs",
  "NzY2OTUzMjU5MzU3MTc1ODA4.X4q3Mw.TbFhz95qmjmoToLraZMrWj9E3Dw",
  "NzY2OTQyNTM5NTA4MjE5OTA1.X4qtUw.ppJLr7R3UW1QcX8oN5IAjekEP-s",
  "NzY3MzEyNTkwNDAwMzg5MTIx.X4wFtA.dB3U2Kofu_jIYI20MfSqAwfcvlM",
  "NzY2OTQzMTI3MzczMzQ4ODc0.X4qtlg.JywjBRF_YV36fo73-WjbgFT6E20",
  "NzY2OTQyMjg3ODI1MzM4MzY4.X4qszg.7ZQc58IpX8_3ZjVXpWIkDpUuJQ4",
  "NzY2OTQ0Mzk5MDczODY5ODY1.X4qvzg.gdEfFMZ_tCVFyRdeoJp6n9LX4DY",
  "NzY2OTQ2MTgwMTkzMTg5OTA4.X4qwcA.Zp-_i7bpTVt3JYeFwQY4kXOJcJk",
  "NzY2OTQxNzIzMDgzMTQ1MjI2.X4qsRg.tWjakxpxLKFRtOxfVY12GZnwtMc",
  "NzY2OTQxMzE5NjQ1NzU3NDU3.X4qsEA.31f0__8umQDJezDTiqXiW5MhDS8",
  "NzY2OTQwNzgyNDQ2NzcyMjI1.X4qrrg.AaRwElKN0ON65Z3qgUdhGryMlYg",
  "NzY2OTM3MzQwNDA4NjI3MjQx.X4qoNw.BYzFBQxqbM5CF4KlAT2c8V25DBw",
  "NzY2OTU2MTE3MTI0NzEwNDMw.X4q5qw.EhX60phIbqR5KzVcZb4XCo8PqmY",
  "NzY2OTM0MzkyNDc5Mjg1MjU4.X4qlfQ.9p9LNiBSiW6RMaRkQ7vebrz5VLM",
  "NzY2OTIxMDEyNDk5MTg1NzA3.X4qZzw.jFUuX93pt48X1-2y3RDk-IrXT0M",
  "NzY2OTM3MDM1NTQ1NzcyMDUy.X4qn_Q.rkbcaiOQvdBtscIXBHciRqyy-vk",
  "NzY2OTUzODM1ODU1NDc4Nzk0.X4q38Q.Km09puHxu-oS8p2Ib33YMeiWSic",
  "NzY2OTQ2NDEwODQ2MjI0NDA0.X4qwuQ.3px30qV6Dp91aEaKEcOJVM8LTsU",
  "NzY2OTU0ODYzMzQyMTI1MTI4.X4q5Lw.nFAAbtKRiu1eewrHWj0JQd4SiRk",
  "NzY2OTM4MzM5NzM5MDQxODAy.X4qpRw.XhWu3_k3uajbmv3zPS2XH4yXQpI",
  "NzY2OTIyMTM5NDYyMDA4ODc0.X4qaMw.YDp-WfaDKYm1X5vrxpk9VLXRJ08",
  "NzY0NjE1NzUxNzI5OTM4NDkz.X4I3fg.s7IfBxjntSxxJQzTYFeXvMUETQw",
  "NzY2OTIyODkzNDM0OTQ1NTU2.X4qa2w.Qvlo-L6RF2rAFQZctW1V64mtqkE",
  "NzY2OTU0NDc3OTY1NjcyNDQ5.X4q4UA.L8AJNGABWzxVXJ1rnSM6KNOFsI8",
  "NzY2OTUyNTA4MDQ3ODg0Mjg5.X4q2bA.mxX16IHX4K4Hbj6yhLanhAb5zho",
  "NzY2OTIzMjgyMTIwODM1MDcy.X4qbHQ.71gWGzSg9wTZwZdvUGn7Z8l303g",
  "NzY2OTIzNTg3MjU2NTgyMTQ0.X4qbcg.DAprmTNa_6clsp2fVSaV7a3jP9w",
  "NzY2OTI0MTMzMzA5MDg3Nzk0.X4qcLA.HJZ-gF54FNIroBXhPR89LGTH1wU",
  "NzY2OTI1NTE5NjE0MTE1ODQz.X4qdMQ.UptfH4p2-8Rrp6YO6SwHVQDjBP4",
  "NzY2OTI1MjI4MzA2NzI2OTEy.X4qc_Q.F6oanrRUxUM52XiUxPurGnHuak0",
  "NzY2OTI1NzUzMzgzOTExNDM0.X4qdbQ.eJkLPqZSqh5KWYAI7deZW-WxUs8",
  "NzY2OTI0ODgyOTUyNDU0MTY0.X4qcpg.L1stqqku_C6Y14PZLFGCjwNob18",
  "NzY2OTI2MDMxNzI5ODUyNDM2.X4qdrw.GCT1_j6I60iKsnMWzQ91ka4b5zE",
  "NzY2OTI2MzQ1NDkzNTQ0OTYw.X4qeAQ.1T5tcEz3xt2VExAeD2U1CjJXw3w",
  "NzY2OTI2NjE3NDgyMTAwODE2.X4qePA._mnvHnX_xqZdM3PbtPJmjCXukdM",
  "NzY2OTI2ODgxMjMyMjU3MDM1.X4qegg.SX5gE9aDaBRDjjK9lhaq5pMfCr4",
  "NzY2OTI3MjIwNTU1NTEzODU2.X4qexA.lLzDb0jENrk2agh0-yRQ2MSZuEk",
  "NzY2OTI3NDkzNzY0MzQ5OTYy.X4qfEA.u56QVNDUzPKMEgNGvg17D3Usuzo",
  "NzY3MzE5MDU2NTEyNDUwNTYx.X4wMEw.P01n_CGJTRqfJ5i0dQdM2TzFXpE",
  "NzY2OTI3Nzc3MTI2OTQwNjgy.X4qfSQ._m1ogeSw3U4nJoNmcy3JfCJS7hw",
  "NzY2OTI3OTk3MjkwNTQ1MTcz.X4qfjw.5aqcJjTTJSGSHcVjD8GrksKfO1s",
  "NzY2OTM4NzYwMDQyMjUwMjUw.X4qpiA.KuCuIabdk3AQiHcWYsROuDaGFl0",
  "NzY2OTU2MTE3MTI0NzEwNDMw.X4q5qw.EhX60phIbqR5KzVcZb4XCo8PqmY",
  "NzY2OTUxMTE4MzA2OTM0Nzk0.X4q2GQ.w50mDxvoFIVlgS9oyQ73pbY2FeY",
  "NzY2OTM5NjE4NzEyMjIzNzY0.X4qqZQ.yuMibIce5OjU-J1jkF_AXp8-kP8",
  "NzY2OTM5Mzg1ODQ0MjAzNTMw.X4qqHQ.OJYbY9mo_2NHZGy7OwsO55QLFHs",
  "NzY2OTI4MjgyODg0Mzc0NTQ4.X4qfwQ.eBAL48Q2fS6Rj4HhyW0oe5P2Svc",
  "NzY2OTQzMzQ5NDcwMTM0Mjkz.X4qt3Q.eL5zPmsR597EUQ4tgVd3Gtr14WY",
  "NzY2OTI5ODQ2NzY0NTY4NTk3.X4qiWg.9yj5onz_7KzYbbWr-pinJyCKMjU",
  "NzY2OTM5OTMyNDA0MDg4ODMz.X4qqsg.nSDO65Mdl0VXlEyzctBxdOm-vUA",
  "NzY2OTMxMjc3MTU5ODU4MTc2.X4qikA.rGuUTaHC7fpmz8eaA58xrB6wePE",
  "NzY2OTM4OTk2MTMwNDQ3Mzcy.X4qp3A.bUoDrLP4RALUFK62A-ksMSHsHew",
  "NzY2OTMxOTMxODkxMzY3OTM2.X4qjRg.tSDaxQDtNCu98FMjBQ4A2YH5klQ",
  "NzY2OTMyNTY3NjI1NTY0MTcw.X4qj0w.KUBu__E1k-1g-e0mVriCKD6l4MY",
  "NzY2OTMyMzMzNjc5ODY5OTYz.X4qjiA.9AX9D2ykgTj3pLQBSuMq1NMKCx8",
  "NzY2OTMyODc3NzIzMDQxODAy.X4qkFw.FaCzJqYdQzr5naXzWsqnnOxbOhY",
  "NzY2OTMzMTYyNjkyNzA2MzE0.X4qkVw.P4NdS9iEuW2hkSl5K2dx5PUCvkI",
  "NzY2OTMzNDE3ODM2MTUwNzg0.X4qklg.OhoP90fdhBBN-cFuHFvLNp3FFUI",
  "NzY2OTMzNjc5NDMxNzQ1NTM2.X4qk0w.JYxcn3rkZ6fHQajCKyTr1FVw8Q0",
  "NzY2OTI5NTYzODUwNTA2Mjkw.X4qg-Q.x35Wjtye0s-F-Ub0BroJJymzMMU",
  "NzY2OTM4MTExNjkwODAxMTc0.X4qo6g.HXErzvaVZF3eWmEhAMM8NV2d82I",
  "NzY2OTM1NTU0NzU0ODcxMjk3.X4qnqw.UP-Qk_6up409W3IK3Ed3bavTnJg",
  "NzY2OTM3NTk0NTg3MTE5NjE2.X4qorA.wVjUTyAZOsyuQF9UfaNesFTYGBk",
  "NzY2OTM0MTMyMTAxNDgwNDk4.X4qlNw.NJkSYe4vGSZzv5BE11DbpJauK7A",
  "NzY3MzEwNzA5MTY3MjI2ODgw.X4wETQ.a16GhpmB2ysjwoDvCETGtS65AUA",
  "NzQzMTI2NTQ3MjQ1ODI2MTU5.XzQI7Q.jI6vIAy373ORJ4mrtbCFkd6XIz4",
  "NzY2OTUwODU3ODc4NTM2MjAz.X4q0yA.pVMVv8E0S6PHttgd-0OQEN12n8I",
  "NzQ1NjUxOTYyNzI4NTQ2NDAz.Xz04xQ.OEkOGRes-NwgYFiV6LjLRt7z-VI",
  "NzQ1NjEzODExNDY5Mzg1Nzg4.Xz0Wmg.3He1jv_e5PGP5ErJcHT9dbAPfHk",
  "NzQyODU5MTM1NzUzNzgxMzQ4.XzMPqA.ZjB-ifjKc9ZMVevLFCvzJpqp8MQ",
  "NzQ1MDUxOTQ4MDc1NDUwNDQy.XzsKLA.NSHYCvIM9cjHF9-LlMmvSw5mRBs",
  "NzQ1MzI0NDgzNjM5OTAyMjQ4.XzwH0g.Pyl4M8gzt_u1QWpkF3CJwv1Zm1I",
  "NzQyODcyMDA4MTczNTUxNzI3.XzMbtQ.JkWNuFV9bZ5gBWpwWl3ISdl-BDU",
  "NzQ1NDQyNzQzNjUxNzk1MDQ3.Xzx15w.vTmEZs7wkigJWMmhZmJKBpqmseM",
  "NzQ1NjUxODYyMzAwMTMxNDAw.Xz048Q.4xezfmXa_BN2sxlDST787dJQl70",
  "NzQyODYzMTYzOTc5OTg5MDky.XzMTeA.qpN6GD4dFGE0HJ_41exrJisgna0",
  "NzQ1MzY0OTgwNzMxNDc4MDg4.XzwtYg.N3brrAM0UvFlUPHlHNxTLJmvNBc",
  "NzIzMjI4MjEzNjg5NzEyNjYx.XuulUA.ZW0Do7269llsDmpgilRxqa_WpEE",
  "NzQ1NDQ1MTAyMDIwODUzNzYw.Xz0MGA.HXJS71WTvajSdaiz0MMt48AGNgA",
  "NzQyODkyMTQ0NDMxMjAyNDI2.XzMung.5y8b2qsROJAP3STv94DKdzKXoVI",
  "NzQ0ODQxOTM0OTY2NzUxMjc0.XzpG1Q.fLD5FcMRRFJEOxE49R272u1HD3c",
  "NzQ0OTcxMjQzMjc0NjMzMjI4.Xzq-sw.Hw_9iyBMvpXOSP1e5rlIZzyVNjU",
  "NzQyODU3NjA1NjU0NzczODAz.XzMORw.pmajEWQqDhG1ZBVaRosromrxeUg",
  "NzQ1NDk2MDEzMDc0MzMzNzI2.XzynYA.B-UI5WOicSsqPyDjU8b7s_ANsJQ",
  "NzQ0OTgyNjAwMDc4MzI3ODYw.XzrJRA.ugTKKnvH6TQOFfEMew6cSvKqea0",
  "NzQ0OTE2NDgyNTU4OTE4ODA4.XzqLuA.nKZxWaeuEvNjtOFQlUCySQjwvMM",
  "NzQ0ODU0MDUzNTUyNTIxMzI4.XzpRhA.lxtDBuhNarrx9ltfna3h6CXP2xE",
  "NzQ1MDEzNTQ0ODc3MTYyNjI3.XzrmFA.gyZiGKXnvA2rEmiXoqe6dtrzQqc",
  "NzQ1MjgwODAyMzkyMjQ0Mjg3.XzvfKg.VwA2B8fmjyANXvG6Hzz-k74_GIg",
  "NzQ1MDAzNzIwMTM1Mjc4Njcx.XzrkOA.WrfuGQsLTBuaWgIxEwWTMXNz8rI",
  "NzQ0ODE2NDU0NTU3MjM3Mjcw.XzoujQ.TL6Zxmsx-pmTm-vvPkVSvZ0FXag",
  "NzQyODY1MzEzMjA0NTM1MzI2.XzMVig.HfzICW_y7cvwewtlLn9fwp7uv8Q",
  "NDE5NDQ1Mzg4MDE4MTg4Mjk5.XzQFTw.SThP60grb_gyvIcigF0yjBrhbbM",
  "NzQ1Mzk4NjQ3MDU4ODU3OTg1.XzxNBw.C2nhfHVdQBVP9wG18PGesIfw7k0",
  "NzQyODcyNTgwNTgyODAxNTE4.XzMcbQ.a1EBKxF4VvEDjDUd-aJ9nA_nWFY",
  "NzQ1NDc2Nzg1NTUwMTMxMjIx.XzyVgQ.hTVxzJoN8oqBy2OCW2BILOKxfy0",
  "NzQyODc0MDI4NTI3NzE0Mzkw.XzMdxw.BTMppZWRY1xBeetWVUj41SL-i1w",
  "NzQyODg5ODMwNTU5NjQ1Njk2.XzMsZw.3e9Nf9NHU1bHpOqEvSJHmkLImm4",
  "NzQyOTA3MDQ2OTk0NzcyMDQ4.XzM8VA.RzR1hT85f8UdLc9rO-v35BqHkDg",
  "NzQ1MzUyNzY3NDg0MzMwMTc4.XzwiJA.LDRw7wbGY6bH_LTQKhkIQ8TjScU",
  "NzQ0OTcyNDcyNzYzNDE2NjE3.Xzq_sA._N6rKCqPkMxY7xBTDWKy1E-wqb8",
  "NzQ1MjYxNjE0Nzc2ODQ0NDA4.XzvOXQ.sX9B3F_TjL3tzU-c4eml0-I01C8",
  "NzQyODY4NjgyMjc0ODk3OTIx.XzMYwA.q2w9Eok05k16Ww_XO3GPvF1oeOQ",
  "NzQyODkyODg1ODI0ODk3MDI0.XzMvHQ.DbeSXoxJoGA74UEIU3Z1AQDhqD8",
  "NzEyODE2MTkzNTQyODE1ODU1.XsXOnA.9JH6PsBl5YGCKaQMfVIXHSy-S7o",
  "NzYxNjM2Mjk2MTkxMTE1MjY0.X3dfRQ.DF4x_d_WhbKVTcMUAzYXOc2Bhpk",
  "NzYxNjM1Mzg0Njg0ODM4OTUy.X3deYA.LkStezoD6Y-WTF_G-_kPd2ej-XY",
  "NzYxNjM2OTM4NDE0MjkzMDcz.X3df0A.OLr9-3Hn_tlxaMgvJJFVjHA6PeY",
  "NzYxNjM1NjYwMzU1ODYyNjA5.X3de-w.zA1Mx20nL_yP97Hg4uPlYiqo0dU",
  "NzYxNjM3MjE3NzgwMzY3NDQz.X3dgUw.P1JooMM6xE9gQS0SfxIgYt8B9iU",
  "NzYxNjM2NjIwNzU1MTQwNjA4.X3dfjA.uCVj1L6KzCPopjriTtKIKMot6jk",
  "NzYxNjM3NzYyODkzNDc5OTg4.X3dgzg.FgxcDCI8tAd2SG_WxqKW26f7foA",
  "NzYxNjM4ODE4NDYwNzI5MzU0.X3dhow.4Dl9Y6fZmCPp9GdofUTWXInTLBk",
  "NzYxNjM4MzMwNDYyMzcxODUw.X3dhQw.hvIf-DQJZTM37sPGNrf_v1lZBNM",
  "NzYxNjM5MjA2NTQzMTYzNDAy.X3dh-Q.IMPUyrQ_kqMjxl7pYsYaJ4Nz0wg",
  "NzYxNjM5NDczODg4MjMxNDM1.X3diPg.P3l6DaQcxNRl7eu1AWlNQulqoYY",
  "NzYyMjczNjgyMzQ4NTcyNjgy.X3mwvQ.umKOY09rmCj3eyUNVfZrGEF0Cfo",
  "NzYyMjczMDAzNTkyODc2MDMy.X3mwLw.Ep5vFacahBFBMxQWcKKet8QlcPA",
  "NzY3MzcwODI3NTAyMzIxNzE0.X4w7_g.maHuWpyQCPzRcSJH2CMw6N8cc04",
  "NzY3MzY1NDgwMzI3MjgyNjk4.X4w4zg.-lZ_nSYFvRKXvAO4u-5eo_Rh4Uk",
  "NzY3MzY0NzEyOTAzMDgxOTg0.X4w2lw.fvt4si6Pg983WM1u5M3kcH0muW8",
  "NzY3MzY5OTUyMjg5ODgyMTMy.X4w7rA.LCduhwVbD3g-H4zqJb33NKsUggI",
  "NzY3MDkzNDkwMTY0OTU3MjA0.X4s5sw.FkGa4TpAy-EgEKwd03ebZRJ5Ojo",
  "NzY3MDkzMTIxMzc2NDUyNjM4.X4s5bQ.DZiEGRnZ36a108NcgwlPQIM3VSw",
  "NzY3MDkyNTkzNTc4MjEzMzc2.X4s4-g.GuRHjl4yl9cTDnyxaPZQJhdb7aY",
  "NzY3MzY3OTA1MjUxNDI2Mzg0.X4w5Xg.rNupfCpV2wbG3lOLwiDG5P7kGdc",
  "NzY3MDkxODQwMjg0ODg1MDE0.X4s4kg.WXr0zjdbcURaXlmrK6q8lc-oZoU",
  "NzY3MDkwODc3NDQ0NjUzMTI4.X4s30Q.pyQvSrWgRZ10-HJAP0O1yILXKgc",
  "NzY3MDk1MjE1MTMxNDU5Njc1.X4s7Lw.7Kptgh60r3FN-d47IUuLJcao_zw",
  "NzY3MDk0Nzk2MDE5ODI2NzE4.X4s63g.4gKwlriSrfH9yJqCoLslDu5WY3s",
  "NzY3MDk0NTkyODY4NTgxNDM4.X4s6ow.riY6RofH2qJym1slzLh80RjvCPk",
  "NzY3MDk0MjQ4ODU2MDkyNzYy.X4s6Vw.D5hvsQPG4VttWZraef4km_fIQPY",
  "NzY3MDkzOTgzODAxMTE0NjI1.X4s6Cw.euuEi0QGewmOWaz-CC5QFfxnSvE",
  "NzY3MDk5NzE3ODU4MzYxNDI0.X4s_Yg.FOYHvonZ5d_7DGUC1wpMDVA2j4k",
  "NzY3MDk5MjMxNjU0NzcyNzU2.X4s_EQ.RIYV_o0dqhR57LRYbXKa40JUiOM",
  "NzY3MDk4OTQ4MjM3NjU2MDk1.X4s-ww.FYMJY85TGKZvBWbVMOVgZ_EDw8Y",
  "NzY3MDk4Mzg2OTQzODM2MTgw.X4s-Tg.kA0La8UH7hKqbN34hVLHd37FnP8",
  "NzY3MDk1NDY2MjczMDEzODMw.X4s9-g.4-WnNWTAileIGnb7jRl3m9loXdg",
  "NzY3MTAxMDY0ODc2OTE2ODI2.X4tArQ.OtGRkMrWPKr_cL8aS5S6JVMqoSU",
  "NzY3MTAwODczMDE2MzQ0NjA2.X4tAeg.tnbAbAzLV6ZTp0OrEZi5W6ZP1ks",
  "NzY3MTAwNTYzNjIyOTg1ODI3.X4tAMw.x7Mfv0Fm2k6wf4Me5zsiaznQYLs",
  "NzY3MTAwMzg1NjEzMzE2MTM2.X4tAAQ.JVxfdhTRHvZoXpqnMP4Xrv6Ebu0",
  "NzY3MDk5OTUzNzEyNzI2MDM2.X4s_qw.kyQZWQRXrd_MRb1K7dlZW4Sx2Eo",
  "NzY3MTAyMTUwNzA2MDY5NTQ0.X4tBtA.kImZ8M15WNilSU6jp2SGeXBuPLM",
  "NzY3MTAxOTkzODkzNzU2OTM4.X4tBfg.PZArvsOczzX6hD8TA34SWfFSJME",
  "NzY3MTAxNjM2Mjk5NzE4NzI2.X4tBNA.v8t2xb0uLUsWt0GYsB4Paf4ojTU",
  "NzY3MTAxNDc4NzUzNjY1MDI1.X4tBAw.sH2gLRD7g7kB-WNux3nTL1Xzne4",
  "NzY3MTAyNDYxODMxNjc1OTE3.X4tB7A.wP2wa2wIz1iAGwIEI1tWoz_4KK8",
  "NzY3MzczODYxMzIxOTY1NjA5.X4w-yw.yB_8MqKx8sSDylKC_vSV681VxD8",
  "NzY3MzczNjQyNDYzMTgyODc4.X4w-ig.Cy4lODOJIH8KX-kdY-ctUREf-Hs",
  "NzY3MzczNDI4MzY1NTkwNTQ4.X4w-WA.uyVHy0zbbZuUhxNpdqAeuyMyfUM",
  "NzY3MzczMTE3ODY5Nzg1MTE5.X4w-JA.FIJ6JSK4d38_Gv06TDKR8a1SkJs",
  "NzY3MzcxMzUxNjIyNDE4NDUz.X4w8wg.PLRlRK8ySI8esJDAJeF_iQJuhag",
  "NzY3Mzc1MjgxMzUzNjU0Mjcy.X4xAGQ.yvz0CJWx3wh-UfJ0ddrFM4cQA94",
  "NzY3Mzc0OTM2NjY2MDEzNzQ4.X4w_vg.331BXmPtLYNDH2gncUcgVfpEquU",
  "NzY3Mzc0Njk3MTcwOTkzMTYz.X4w_ew.3EEJr3kVWR4gw_9KbhkWYfmVa7c",
  "NzY3Mzc0NDEyMTc3NDczNTM4.X4w_RA.fpIP9p7kVsVzq3UqJemTA06E4Zg",
  "NzY3Mzc3NDcwOTQ0NTc1NTM5.X4xCGQ.2PAOvFlkw22DJZyRYHl2nq77TK8",
  "NzY3Mzc3MjA4MzQ3MTk3NDcy.X4xB6g.o1vyh_ws6t97-xD9fGZYcOC5aus",
  "NzY3Mzc2OTcxMTIxMjk1MzYx.X4xBmA.j1tqpy5ySTV34QpZ-IkxBkQYSDE",
  "NzY3Mzc2NjMyMjE3OTkzMjE2.X4xBUQ.R2t1_mtOCa7gUpTjp_a9aY6JMMs",
  "NzY3Mzc1NTgyMDYwODcxNzIw.X4xBIQ.PxbPsi4Vp-gjgz-Ulc5g_aXa9Tg",
  "NzY3Mzc4ODg2ODA3MjU3MTI4.X4xDYw.dVEjO7FQeh2yVWKFH1x79b_X2Tw",
  "NzY3Mzc4NTA4NzUzNDAzOTA0.X4xDFg.AmOhBPu2p-6m_jI273XyTwdjyOc",
  "NzY3Mzc4MzEwNjMwOTk4MDU2.X4xC4A.V3As27ZE1sgAtsbrsWwxuCnhO9M",
  "NzY3Mzc3OTQ1ODY5NDE4NDk2.X4xCkg.rvAGpXJ5noa9u6zHExkN9TQ9dqw",
  "NzY3Mzc3NzIxNzUwNzE2NDY2.X4xCVg.QGYoQMB550k0Asf2XEWy4lhoau4",
  "NzY3MzgwMTU0MzY3NjA2Nzk1.X4xFXg.-ia1RFZtQd6Q7yaFEZVjkdChHhY",
  "NzY3MzgwMDIwOTcxOTYyMzg4.X4xEag.IFNKF9UiRsAJM-2fTL3y3fFcGek",
  "NzY3Mzc5NjgxNDg5MTkwOTEy.X4xELw.b3jKmiRCU_LS3bl5f7IZeGgT1rg",
  "NzY3Mzc5NTA2ODYzMjc2MDQz.X4xD8A.y6_gXPTEpBh27CwmoC1QMofHtTE",
  "NzY3Mzc5MTM0MTM3MjM3NTE0.X4xDtA.IbWAK25ldBWBoZMGhv6SOxDUpgc",
  "NzY3MzgyOTgxODA2Nzg0NTMy.X4xHLw.8sjiIz82kFNGnVWx-xgEiQXctp0",
  "NzY3MzgyNjUwMDI4NTU2MzEw.X4xG8g.rdGzQd3sxwTRysNkQC7KRmLArnw",
  "NzY3MzgyMzcxMjE3MzA5NzE2.X4xGsg.vzz9OiuD_wQg2wL_sux7kEhUpLY",
  "NzY3MzgxNzIxNjkwNjY5MTA3.X4xGDQ.r-k9oUceWpXPv9swNZoZ92IWOhw",  

]
let sayi = 0
for (const tokenler of arr) {
  const client = new Discord.Client()
    client.on('ready', () => {
      client.user.setPresence('online')
//idle = boşta
//dnd = rahatsız etme
//online = aktif
        console.log(""+ ++sayi +". hesaba " + client.user.tag + " girdim ")
    })

/*
    client.on("ready", async () => {
      setInterval(() => {
        client.channels.get("689791598334443563")
          .messages.get('689858263445274643')
          .then(msg => {
          msg.react('a:tiks2:689853938710741088')
          }) ,10000})})
   */



   
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.author.id !== "146516496028270593") return
  if (message.channel.type !== "text") return;
  if (!message.guild) return;
  let prefikslerim = [".", "!", "m!"];
  let tokuchim = false;
  for (const içindeki of prefikslerim) {
      if (message.content.startsWith(içindeki)) tokuchim = içindeki;
  }
  if (!tokuchim) return;
  const args = message.content.slice(tokuchim.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = message.content.toLower;
  const split = message.content.split('"');
  switch (command) {
      case "eval":
          if (args.join(" ").toLowerCase().includes('token')) return message.channel.send("Wow, you're smart.")
          const clean = text => {
              if (typeof (text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
              else return text;
          }
          try {
              const code = args.join(" ");
              let evaled = eval(code);
              if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
              message.channel.send(clean(evaled), { code: "xl" });
          } catch (err) {
              message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
          break

  }
});
          client.login(tokenler)
}

