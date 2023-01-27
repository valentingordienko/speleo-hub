import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Panama.svg';

export function Panama(props: TBaseProps) {
  return (
    <Icon {...props} name="Panama">
      <SVG />
    </Icon>
  );
}
