/**
 * api接口统一管理
 */
import { get, post } from './http'

// banner
export const getBanner = p => get('a/banner', p)
// 首页最新职位
export const getNewjob = p => get('a/index/job', p)
// 职位详情
export const getJobdetail = p => get('a/job/' + p.jobId)
// 公司详情
export const getCompdetail = p => get('a/company/' + p.companyId)
// 公司详情职位
export const getCompjob = p => post('a/company/job/', p)
// 职位列表
export const getJoblist = p => post('a/findjob/list', p)
// 找职位-推荐职位
export const getRecjob = p => get('a/findjob/rcmd', p)
// 找职位-最新职位
export const getNewfindjob = p => get('a/findjob/new', p)
// 最新认证公司
export const getNewAutone = p => get('a/findjob/company/newautone', p)
// 普通公司
export const getComcompany = p => get('a/findjob/company/common', p)
// 最新发布职位认证公司
export const getNewJobCompany = p => get('a/findjob/company/newaut', p)
// 公司列表
export const getComlist = p => post('a/company/list', p)
