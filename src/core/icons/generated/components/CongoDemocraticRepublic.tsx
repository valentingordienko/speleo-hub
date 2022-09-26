import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CongoDemocraticRepublic.svg';

export function CongoDemocraticRepublic(props: TProps) {
  return (
    <Icon {...props} name="CongoDemocraticRepublic">
      <SVG />
    </Icon>
  );
}
