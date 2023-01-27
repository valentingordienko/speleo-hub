import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SvalbardAndJanMaye.svg';

export function SvalbardAndJanMaye(props: TBaseProps) {
  return (
    <Icon {...props} name="SvalbardAndJanMaye">
      <SVG />
    </Icon>
  );
}
