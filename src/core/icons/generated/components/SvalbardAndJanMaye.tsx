import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SvalbardAndJanMaye.svg';

export function SvalbardAndJanMaye(props: TProps) {
  return (
    <Icon {...props} name="SvalbardAndJanMaye">
      <SVG />
    </Icon>
  );
}
