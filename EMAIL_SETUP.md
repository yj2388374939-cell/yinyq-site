# 个人域名邮箱配置清单

目标：用个人域名做一个正式邮箱，例如 `contact@yinyq.net`，并尽量继续在 Gmail 里收发。

## 推荐决策

### 方案 A：Google Workspace

适合：你希望邮箱本身就是 Gmail，稳定、省心、少折腾。

- 收件：域名 MX 指向 Google。
- 发件：直接从 Gmail / Google Workspace 发出。
- 成本：按用户付费。
- DNS 关键点：Google Workspace 当前官方 MX 值为 `smtp.google.com`，优先级 `1`。如果旧账号仍使用 `aspmx` 系列且正常工作，不需要改。

基本步骤：

1. 购买或确认域名所有权。
2. 注册 Google Workspace 并验证域名。
3. 在域名 DNS 删除其他旧 MX 记录。
4. 添加 Google 的 MX 记录：`MX @ 1 smtp.google.com`。
5. 在 Google Admin Console 里激活 Gmail。
6. 添加 SPF、DKIM、DMARC，提升送达率。
7. 用外部邮箱测试收发。

### 方案 B：Cloudflare Email Routing + Gmail Send As

适合：你想保留现有个人 Gmail 收件箱，并尽量降低成本。

- 收件：Cloudflare 把 `contact@yinyq.net` 转发到你的个人 Gmail。
- 发件：在 Gmail 里添加“Send mail as”，通常需要一个支持 SMTP 的第三方服务。
- 成本：收件转发可低成本；稳定发件通常需要 SMTP 服务。
- 限制：Cloudflare Email Routing 主要负责收件转发，不等同于完整邮箱主机。

基本步骤：

1. 把域名 DNS 托管到 Cloudflare。
2. 在 Cloudflare Email Routing 添加 Gmail 作为 Destination Address，并在 Gmail 中点验证。
3. 创建路由规则，例如 `contact@yinyq.net -> yourname@gmail.com`。
4. 测试收件，注意要从另一个邮箱发测试邮件。
5. 为发件选择 SMTP 服务。
6. 在 Gmail 设置里添加“Send mail as”，填入姓名、域名邮箱、SMTP 信息并验证。
7. 配置 SPF、DKIM、DMARC，让收件方信任你的域名邮件。

## DNS 注意事项

- 网站记录通常是 `A`、`AAAA`、`CNAME`。
- 邮件收件记录是 `MX`。
- 邮件身份认证通常是 `TXT`，包括 SPF、DKIM、DMARC。
- 同一个域名可以同时有网站和邮箱，但不要同时使用两套冲突的 MX 记录。
- 改 DNS 前先截图或导出现有记录，方便回滚。

## 网站域名方向

如果使用 GitHub Pages：

- 根域名 `yourdomain.com`：配置 GitHub Pages 要求的 `A` 记录。
- `www.yourdomain.com`：配置 `CNAME` 指向 GitHub Pages 默认域名。
- 在 GitHub 仓库 Pages 设置里添加自定义域名，再启用 HTTPS。

## 下一步需要你确认

- 你是否已经有域名？如果有，把域名发我。
- 你想用哪个邮箱地址前缀？例如 `hello`、`me`、`contact`、你的英文名。
- 你更偏向 Google Workspace，还是 Cloudflare 转发 + SMTP？
- 简历网站要面向中文、英文，还是中英双语？

## 参考链接

- Google Workspace MX 记录说明：https://support.google.com/a/answer/174125
- Gmail 添加其他发件地址：https://support.google.com/mail/answer/22370
- Gmail POP / Gmailify 变更说明：https://support.google.com/mail/answer/16604719
- Cloudflare Email Routing：https://developers.cloudflare.com/email-service/get-started/route-emails/
- GitHub Pages 自定义域名：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
