import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSignVerifySolid.svg';

export function DocSignVerifySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocSignVerifySolid">
      <SVG />
    </Icon>
  );
}
