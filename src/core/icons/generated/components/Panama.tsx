import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Panama.svg';

export function Panama(props: TProps) {
  return (
    <Icon {...props} name="Panama">
      <SVG />
    </Icon>
  );
}
